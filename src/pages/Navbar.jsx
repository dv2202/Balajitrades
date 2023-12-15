import React, { useState } from 'react';
import main_logo from '../assets/ Main_logo.png';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleSetActiveLink = (to) => {
    setActiveLink(to);
  };

  return (

    <nav className={`border-gray-200 mx-auto w-full fixed z-[110] bg-white hidden md:block`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-1 pb-1">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={300}
          className="flex items-center ml-0 rtl:space-x-reverse"
          onSetActive={() => handleSetActiveLink('home')}
        >
          <img src={main_logo} className="h-[80px]" alt="Logo" />
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            <li>
            <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-85}
                duration={300}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-500 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${activeLink === 'home' ? 'text-purple-500' : ''}`}
                onSetActive={() => handleSetActiveLink('home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-85}
                duration={300}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-500 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${activeLink === 'about' ? 'text-purple-500' : ''}`}
                onSetActive={() => handleSetActiveLink('about')}
              >
                About
              </Link>
            </li>
            <li>
            <Link
                to="product"
                spy={true}
                smooth={true}
                offset={-85}
                duration={300}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-500 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${activeLink === 'product' ? 'text-purple-500' : ''}`}
                onSetActive={() => handleSetActiveLink('product')}
              >
                Product
              </Link>
            </li>
            <li>
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-85}
                duration={300}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-500 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${activeLink === 'contact' ? 'text-purple-500' : ''}`}
                onSetActive={() => handleSetActiveLink('contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
