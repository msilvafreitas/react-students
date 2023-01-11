import { useState, useEffect } from 'react';
import axios from "../api/axios";
import { LoginAluno } from "./loginAluno";

export function DashboardAluno() {
    const token = localStorage.getItem('token');
    const userToken = JSON.parse(token);
    const DATA_URL = '/aluno/score';

    const [notas, setNotas] = useState([]);

    let config = {
        headers: {
            'Authorization': `Bearer ${userToken}`
        }
    }
    const getData = async () => {
        axios.get(
            DATA_URL,
            config
        )
            .then((response) => {
                setNotas(response)
                console.log(notas)
            })
            .catch()
    }


    useEffect(() => {
        getData();
    }, []);


    if (!token) {
        return <LoginAluno />
    }

    return (
        <div className='w-full p-10'>
            <div className='flex justify-between pb-4'>
                <p className='font-semibold text-[22px]'>Minhas Notas</p>
                <div className='flex px-4 py-2 rounded-[4px] bg-white'>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                        <table className="min-w-full">
                            <thead>
                                <tr className='h-14'>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-head text-left font-medium">Av. 1</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-head text-left font-medium">Av. 2</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-head text-left font-medium">Av. 3</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-head text-left font-medium">Av. 4</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-head text-left font-medium">Média Final</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-head text-left font-medium">Situação</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">

                                        {/* <tr key={notas.scores[0].average}>

                                            <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-black-text">
                                                {parseFloat(notas.scores[0].n1).toFixed(2)}
                                            </td>
                                            <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-black-text">
                                                {parseFloat(notas.scores[0].n2).toFixed(2)}
                                            </td>
                                            <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-black-text">
                                                {parseFloat(notas.scores[0].n3).toFixed(2)}
                                            </td>
                                            <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-black-text">
                                                {parseFloat(notas.scores[0].n4).toFixed(2)}
                                            </td>
                                            <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-black-text">
                                                {parseFloat(notas.scores[0].average).toFixed(2)}
                                            </td>

                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <span className={`px-6 py-[6px] inline-flex leading-5 rounded-full ${notas.scores[0].situation === 'Aprovado' ? "bg-green-status" : "bg-red-300"}`}>
                                                    {notas.scores[0].situation}
                                                </span>
                                            </td>

                                        </tr> */}
                                    

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}