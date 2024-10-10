import { Link } from 'react-router-dom'; // Importa Link da React Router

export default function NavLink({
    active = false,
    className = '',
    children,
    to, // Usa `to` invece di `href` per React Router
}) {
    return (
        <Link
            to={to} // Utilizza `to` per definire il percorso
            className={`flex items-center border-b-2 py-2 px-4 ${
                active
                    ? 'border-indigo-400 text-indigo-700 focus:border-indigo-700 focus:text-indigo-800 dark:border-indigo-600 dark:text-indigo-300'
                    : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-800 focus:border-gray-300 focus:text-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200'
            } text-lg font-medium transition duration-150 ease-in-out focus:outline-none ${className}`}
        >
            {children}
        </Link>
    );
}
