import React, { useState, useEffect } from 'react';
import Logo from '../assets/Artboard 1.png';
import { Link, useLocation } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`nav-glass fixed top-0 left-0 w-full z-50 ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 md:py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-12 md:h-16" alt="Neo Elevators Logo" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/elevators" className={`nav-link ${isActive('/elevators') ? 'active' : ''}`}>
            Elevators
          </Link>
          <Link to="/contactus" className={`nav-link ${isActive('/contactus') ? 'active' : ''}`}>
            Contact Us
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`md:hidden flex flex-col gap-[5px] p-2 ${isMenuOpen ? 'hamburger-open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden ${isMenuOpen ? 'open' : ''}`}>
        <div className="px-5 pb-4 flex flex-col gap-1">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/elevators" className={`nav-link ${isActive('/elevators') ? 'active' : ''}`}>
            Elevators
          </Link>
          <Link to="/contactus" className={`nav-link ${isActive('/contactus') ? 'active' : ''}`}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
