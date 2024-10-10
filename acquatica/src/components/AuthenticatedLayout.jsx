// src/AuthenticatedLayout.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './fontwaves.css';

export default function AuthenticatedLayout({ children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 authenticated-layout relative">
            {/* Navbar */}
            <nav className="z-50 border-b border-gray-100 bg-[#001f3f] bg-opacity-80 dark:border-gray-700 dark:bg-navy-blue dark:bg-opacity-80">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div className="flex items-center">
                            {/* Logo */}
                            <Link to="/dashboard">
                                <img 
                                    src="/logo/logonegativo/Logo-scelto-negativo.png" 
                                    alt="Logo"
                                    className="block h-20 w-30" 
                                />
                            </Link>
                        </div>

                        {/* Desktop NavLinks */}
                        <div className="hidden space-x-10 md:flex ml-auto">
                            <Link to="/azienda" className="text-lg text-white">Pagina Azienda</Link>
                            <Link to="/usato" className="text-lg text-white">Usato e Noleggio</Link>
                            <Link to="/noleggio" className="text-lg text-white">Noleggio</Link>
                            <Link to="/contatti" className="text-lg text-white">Contatti</Link>
                            <Link to="/servizi" className="text-lg text-white">Servizi</Link>
                            <Link to="/offerte" className="text-lg text-white">Offerte</Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="-mr-2 flex items-center md:hidden">
                    <button
                        onClick={() => setShowingNavigationDropdown(prev => !prev)}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500"
                    >
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                            <path className={showingNavigationDropdown ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div className={`${showingNavigationDropdown ? 'block' : 'hidden'} bg-gray-800`}>
                <div className="space-y-2 py-2">
                    <Link to="/azienda" className="block text-white">Pagina Azienda</Link>
                    <Link to="/usato" className="block text-white">Usato e Noleggio</Link>
                    <Link to="/noleggio" className="block text-white">Noleggio</Link>
                    <Link to="/contatti" className="block text-white">Contatti</Link>
                    <Link to="/servizi" className="block text-white">Servizi</Link>
                    <Link to="/offerte" className="block text-white">Offerte</Link>
                </div>
            </div>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    );
}