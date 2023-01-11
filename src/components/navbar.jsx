import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';

export function Navbar() {
    return (
        <nav className="flex items-center h-28 justify-between px-10 bg-white">
            <div className='flex'>
                <Logo />
                <ul className='flex gap-6 px-12'>
                    <li className='p-2'>Menu Item</li>
                    <li className='p-2'>Menu Item</li>
                    <li className='p-2'>Menu Item</li>
                </ul>
            </div>
            <button className='bg-blue-button text-white py-3 px-4 rounded-md font-semibold'>Perfil</button>
        </nav>
    )
}