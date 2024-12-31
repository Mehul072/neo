import React, { useState } from 'react';
import Logo from '../assets/Artboard 1.png';
import { Link, useLocation } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const selected = () => {
    if (location.pathname === '/') return 'home';
    if (location.pathname === '/elevators') return 'lifts';
    if (location.pathname === '/contactus') return 'contact us';
    return '';
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <nav className="bg-white border-gray-200 fixed top-0 left-0 w-full z-50 shadow">
        <div className="max-w-screen-xxl flex items-center justify-between px-4 py-3 md:py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-12 md:h-20" alt="Logo" />
          </Link>

          {/* Hamburger Icon for Mobile */}
          <button
            className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMenu}
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Menu */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } w-full md:flex md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse bg-gray-50 md:bg-white md:border-0 border border-gray-100 rounded-lg">
              <li className="rounded-lg">
                <Link
                  to="/"
                  className={`block px-5 py-3 ${
                    selected() === 'home'
                      ? 'text-primary border-b-4 border-primary'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="rounded-lg">
                <Link
                  to="/elevators"
                  className={`block px-5 py-3 ${
                    selected() === 'lifts'
                      ? 'text-primary border-b-4 border-primary'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={toggleMenu}
                >
                  Elevators
                </Link>
              </li>
              <li className="rounded-lg">
                <Link
                  to="/contactus"
                  className={`block px-5 py-3 ${
                    selected() === 'contact us'
                      ? 'text-primary border-b-4 border-primary'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={toggleMenu}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
