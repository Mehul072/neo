import React, { useState } from 'react';
import { Building, EnvelopeSimple, Phone } from '@phosphor-icons/react';
import { Link } from 'react-router';
import useDynamicTitle from '../components/useDynamicTitle';

const ContactUs = () => {
  useDynamicTitle(
    'Contact Neo Elevators | Premium Elevator Solutions',
    'Get a free quote on premium elevator installation, maintenance, and modernization from Neo Elevators. Contact our Ulhasnagar, Maharashtra team today.'
  );
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const WHATSAPP_NUMBER = '919890362318'; // Neo Elevators WhatsApp number

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const text = `Hi Neo Elevators!%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Message:* ${encodeURIComponent(message)}`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    window.open(waUrl, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-wrapper mt-[4.5rem] md:mt-[4.5rem] pt-6 md:pt-4">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold text-charcoal mb-8 animate-fade-in">
        Contact Neo Elevators
      </h1>

      <div className="contact-grid">
        {/* Form */}
        <div className="contact-form-card">
          <h2>Send Us a Message</h2>
          <p className="form-subtitle">Fill out the form and we'll get back to you shortly.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Full Name</label>
              <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Write your message here" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send via WhatsApp
            </button>
          </form>
        </div>

        {/* Info Cards */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p className="info-subtitle">Reach us through any of the channels below.</p>

          <div className="info-card">
            <div className="info-icon">
              <Building size={24} color="#B49D5E" weight="duotone" />
            </div>
            <div>
              <h3>Our Office</h3>
              <p>Lower Ground Floor, Sudhi Villa. Block No. A-698/1395. Behind Netaji High School. Ulhasnagar - 421 005. Dist. Thane. Maharashtra.</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Phone size={24} color="#B49D5E" weight="duotone" />
            </div>
            <div>
              <h3>Phone</h3>
              <p>+91 9890362318</p>
              <p>+91 8855024000</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <EnvelopeSimple size={24} color="#B49D5E" weight="duotone" />
            </div>
            <div>
              <h3>Email</h3>
              <p>elevatorsneo@gmail.com</p>
            </div>
          </div>

          {/* Internal links for SEO & Navigation */}
          <div className="info-card" style={{ background: 'rgba(180, 157, 94, 0.08)', border: '1px solid rgba(180, 157, 94, 0.25)' }}>
            <div className="info-icon">
              <Building size={24} color="#B49D5E" weight="duotone" />
            </div>
            <div>
              <h3>Quick Navigation</h3>
              <p>Explore our premium <Link to="/elevators" className="text-primary hover:underline font-bold">Elevator Designs</Link> catalog or return to the <Link to="/" className="text-primary hover:underline font-bold">Homepage</Link>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
