import { useEffect, useState, useRef, useContext } from 'react';
import axios from "../api/axios";
import AuthContext from "../context/AuthProvider";
import { useNavigate } from 'react-router-dom';
import useToken from '../useToken';

export function Login() {
    const navigate = useNavigate();
    const LOGIN_URL = '/adm/admin/login';
    const userRef = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const { token, setToken } = useToken();
    useEffect(() => {
        userRef.current.focus();
    }, []);
    useEffect(() => {
        setErrMsg("");
    }, [email, password]);

    const { setAuth } = useContext(AuthContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: false,
                }
            );
            const accessToken = response?.data?.token;
            const roles = response?.data?.roles;
            setAuth({ email, password, roles, accessToken });
            setEmail("");
            setPassword("");
            setSuccess(true);
            setToken(accessToken);
            navigate('/admin/');
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing Username or Password");
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login Failed");
            }
        }
    };


    return (
        <div className="flex justify-center items-center py-40  px-6">
            <div className="p-6 max-w-sm w-full bg-gray-head shadow-md rounded-md">
                <div className="flex justify-center items-center">
                    <span className="text-black-text font-semibold text-2xl">Login - Professor</span>
                </div>

                <form className="mt-4" onSubmit={handleSubmit}>
                    <label className="block">
                        <span className="text-black-text text-sm">Email</span>
                        <input type="email" ref={userRef} onChange={(e) => setEmail(e.target.value)} value={email} className="form-input px-4 py-2 rounded-[4px] mt-1 block w-full focus:border-blue-button" placeholder="email@email.com" />
                    </label>

                    <label className="block mt-3">
                        <span className="text-black-text text-sm">Senha</span>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-input px-4 py-2 rounded-[4px] mt-1 block w-full focus:border-blue-button" placeholder="********" />
                    </label>


                    <div className="mt-6">
                            <button type="submit" className="bg-blue-button text-white py-3 px-4 rounded-md font-semibold text-center w-full">
                                Sign in
                            </button>
                    </div>

                    <div className="flex items-center justify-around mt-4">
                        <button onClick={() => {navigate('/aluno/')}} className="block text-sm fontme text-blue-button hover:underline" href="#">Entre como Aluno</button>
                    </div>
                </form>
            </div>
        </div>
    )
}