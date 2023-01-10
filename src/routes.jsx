import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { Navbar } from './components/navbar';

export default function AppRouter() {
    return (
        <main className="container bg-[#E9E9EF] h-full">
            <Router>
                <Navbar />
                <Dashboard />
            </Router>
        </main>
    )
}