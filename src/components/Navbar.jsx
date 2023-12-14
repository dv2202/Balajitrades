import React from 'react'
import main_logo from "../assets/ Main_logo.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900  mx-auto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-1 pb-1 ">
            <Link to="/"
            className="flex items-center ml-0 rtl:space-x-reverse"
            >
            <img
                src={main_logo}
                className="h-[80px]"
                alt="Logo"
            />
            </Link>

            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <Link
                    to="/"
                    className="block py-2 px-3 text-white bg-purple-500 rounded md:bg-transparent md:text-purple-500 md:p-0"
                    aria-current="page"
                >
                    Home
                </Link>
                </li>
                <li>
                <Link
                    to="/about"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-500 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                    About
                </Link>
                </li>
                <li>
                <Link
                    to="/products"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-500 md:p-0 "
                >
                    Products
                </Link>
                </li>
                <li>
                <Link
                    to="/contact"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-500 md:p-0"
                >
                    Contact
                </Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
