import { Link } from 'react-router-dom';

export function Dashboard() {
    return (
        <div className='w-full p-10'>
            <div className='flex justify-between pb-4'>
                <p className='font-semibold text-[22px]'>Meus Alunos</p>
                <input className='px-4 py-2 rounded-[4px] text-sm' type="text" placeholder='Pesquisar alunos' />
            </div>

            <div class="flex flex-col">
                <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                        <table class="min-w-full">
                            <thead>
                                <tr className='h-14'>
                                    <th class="px-4 py-3 border-b border-gray-200 bg-[#F3F4F6] text-left font-medium">Nome do Aluno</th>
                                    <th class="px-4 py-3 border-b border-gray-200 bg-[#F3F4F6] text-left font-medium">Atualização</th>
                                    <th class="px-4 py-3 border-b border-gray-200 bg-[#F3F4F6] text-left font-medium">Av. 1</th>
                                    <th class="px-4 py-3 border-b border-gray-200 bg-[#F3F4F6] text-left font-medium">Av. 2</th>
                                    <th class="px-4 py-3 border-b border-gray-200 bg-[#F3F4F6] text-left font-medium">Av. 3</th>
                                    <th class="px-4 py-3 border-b border-gray-200 bg-[#F3F4F6] text-left font-medium">Av. 4</th>
                                    <th class="px-4 py-3 border-b border-gray-200 bg-[#F3F4F6] text-left font-medium">Média Final</th>
                                    <th class="px-4 py-3 border-b border-gray-200 bg-[#F3F4F6] text-left font-medium">Situação</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                <tr>
                                    <td class="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-[#131313]">John Doe</td>

                                    <td class="px-4 py-3 whitespace-no-wrap border-b border-gray-200">
                                        <div class="leading-6 text-gray-900">20-12-2022</div>
                                        <div class="text-sm leading-5 text-gray-500">22:09</div>
                                    </td>

                                    <td class="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-[#131313]">5.00</td>
                                    <td class="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-[#131313]">8.00</td>
                                    <td class="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-[#131313]">9.00</td>
                                    <td class="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-[#131313]">7.00</td>
                                    <td class="px-4 py-3 whitespace-no-wrap border-b border-gray-200 text-[#131313]">7.25</td>

                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <span class="px-6 py-[6px] inline-flex leading-5 rounded-full bg-[#BBF7D0] ">Aprovado</span>
                                    </td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}