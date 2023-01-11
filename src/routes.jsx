import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { Login } from './components/login';
import { Navbar } from './components/navbar';
import { LoginAluno } from './components/loginAluno';
import { DashboardAluno } from './components/dashboardAluno';


export default function AppRouter() {

    return (
        <main className="bg-gray-bg h-screen">
            <Router>
                <Navbar />
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/aluno' element={<LoginAluno />} />
                        <Route path='/aluno/notas' element={<DashboardAluno />} />
                        <Route path='/admin' element={<Dashboard />} />                   
                    </Routes>
            </Router>
        </main>
    )
}