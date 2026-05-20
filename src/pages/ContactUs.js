import React, { useState } from 'react';
import { Building, EnvelopeSimple, Phone } from '@phosphor-icons/react';
import useDynamicTitle from '../components/useDynamicTitle';

const ContactUs = () => {
  useDynamicTitle(
    'Contact Us — Get a Free Elevator Quote | Neo Elevators',
    'Contact Neo Elevators for a free quote on elevator installation, maintenance & modernization. Call +91 9890362318 or email elevatorsneo@gmail.com. Located in Ulhasnagar, Thane, Maharashtra.'
  );
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL || 'https://neo-elevators.onrender.com';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/send-message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to send');
      alert('Message sent successfully via WhatsApp!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      alert('Error sending message. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-wrapper mt-[4.5rem] md:mt-[4.5rem] pt-6 md:pt-2">

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
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
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
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
