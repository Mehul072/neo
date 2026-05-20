import { Building, EnvelopeSimple, Phone, NavigationArrow } from '@phosphor-icons/react';
import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <h2>Neo <span>Elevators</span></h2>
          <p>Pioneer in modern elevator solutions, delivering innovative and reliable vertical transportation systems since 2005.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <Link to="/" className="footer-link">
            <NavigationArrow size={14} weight="bold" /> Home
          </Link>
          <Link to="/elevators" className="footer-link">
            <NavigationArrow size={14} weight="bold" /> Elevators
          </Link>
          <Link to="/contactus" className="footer-link">
            <NavigationArrow size={14} weight="bold" /> Contact Us
          </Link>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <div className="footer-link">
            <Building size={16} color="#D3C08A" weight="duotone" />
            <span>Ulhasnagar, Thane, Maharashtra</span>
          </div>
          <a href="tel:+919890362318" className="footer-link">
            <Phone size={16} color="#D3C08A" weight="duotone" />
            <span>+91 9890362318</span>
          </a>
          <a href="mailto:elevatorsneo@gmail.com" className="footer-link">
            <EnvelopeSimple size={16} color="#D3C08A" weight="duotone" />
            <span>elevatorsneo@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Neo Elevators. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
