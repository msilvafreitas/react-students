import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';

export function Navbar() {
    return (
        <nav className="w-full flex items-center h-28 justify-around bg-white">
            <div className='flex'>
                <Logo />
                <ul className='flex gap-6'>
                    <li className='p-2'>Menu Item</li>
                    <li className='p-2'>Menu Item</li>
                    <li className='p-2'>Menu Item</li>
                </ul>
            </div>
            <button className='bg-[#0066B3] text-white py-3 px-4 rounded-md font-semibold'>Perfil</button>
        </nav>
    )
}