export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <a
            {...props}
            className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ${className} ${
                active
                    ? 'border-indigo-400 text-white'
                    : 'border-transparent text-white hover:border-gray-300 hover:text-gray-300 focus:border-gray-300 focus:text-gray-300'
            }`}
        >
            {children}
        </a>
    );
}
