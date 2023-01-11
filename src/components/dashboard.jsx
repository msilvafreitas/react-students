import { MagnifyingGlass, ArrowDown, ArrowUp } from "phosphor-react";
import { useState, useEffect } from 'react';
import axios from "../api/axios";
import { Login } from "./login";

export function Dashboard() {
    const token = localStorage.getItem('token');
    const userToken = JSON.parse(token);
    const DATA_URL = '/adm/student';

    const [students, setStudents] = useState([])
    const [search, setSearch] = useState('')

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
                setStudents(response.data)
            })
            .catch()
    }


    function testSearch(title) {
        const regex = new RegExp(search, 'i');
        return regex.test(title);
    }


    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        const newList = students.filter(student => testSearch(student.firstName));
        console.log(newList)
        setStudents(newList);
    }, [search]);


    if (!token) {
        return <Login />
    }



    return (
        <div className='w-full p-10'>
            <div className='flex justify-between pb-4'>
                <p className='font-semibold text-[22px]'>Meus Alunos</p>
                <div className='flex px-4 py-2 rounded-[4px] bg-white'>
                    <input
                        className='text-sm outline-none'
                        type="text"
                        placeholder='Pesquisar alunos'
                        value={search}
                        onChange={event => setSearch(event.target.value)} />
                    <MagnifyingGlass size={20} />
                </div>
            </div>

            <div className="flex flex-col">
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                        <table className="min-w-full">
                            <thead>
                                <tr className='h-14'>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-head text-left font-medium flex">
                                        Nome do Aluno
                                        <ArrowDown size={20} className='mx-2' />
                                        <ArrowUp size={20} className='mx-2 hidden' />
                                    </th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-head text-left font-medium">Atualização</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-head text-left font-medium">Av. 1</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-head text-left font-medium">Av. 2</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-head text-left font-medium">Av. 3</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-head text-left font-medium">Av. 4</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-head text-left font-medium">Média Final</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-head text-left font-medium">Situação</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {students.map(student => {
                                    return (
                                        <tr key={student.id}>
                                            <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-black-text">{student.firstName} {student.lastName}</td>

                                            <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-200">
                                                <div className="leading-6 text-gray-900">{student.updatedAt.substring(8, 10)}-{student.updatedAt.substring(5, 7)}-{student.updatedAt.substring(0, 4)}</div>
                                                <div className="text-sm leading-5 text-gray-500">{student.updatedAt.substring(11, 16)}</div>
                                            </td>

                                            <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-black-text">
                                                {parseFloat(student.scores[0].n1).toFixed(2)}
                                            </td>
                                            <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-black-text">
                                                {parseFloat(student.scores[0].n2).toFixed(2)}
                                            </td>
                                            <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-black-text">
                                                {parseFloat(student.scores[0].n3).toFixed(2)}
                                            </td>
                                            <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-black-text">
                                                {parseFloat(student.scores[0].n4).toFixed(2)}
                                            </td>
                                            <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-black-text">
                                                {parseFloat(student.scores[0].average).toFixed(2)}
                                            </td>

                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <span className={`px-6 py-[6px] inline-flex leading-5 rounded-full ${student.scores[0].situation === 'Aprovado' ? "bg-green-status" : "bg-red-300"}`}>
                                                    {student.scores[0].situation}
                                                </span>
                                            </td>

                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}