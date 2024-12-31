import React, { useState } from 'react';
import axios from 'axios';
import useDynamicTitle from '../components/useDynamicTitle';

const ContactUs = () => {
  useDynamicTitle("Contact us | Neo elevators");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); // To show loading state

  // Use REACT_APP_API_URL for flexibility in different environments
  const apiUrl = process.env.REACT_APP_API_URL || 'https://neo-elevators.onrender.com';


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Enable loading state
    try {
      await axios.post(`${apiUrl}/send-message`, formData);
      alert('Message sent successfully via WhatsApp!');
      setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    } catch (err) {
      alert('Error sending message. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false); // Disable loading state
    }
  };

  return (
    <div className="contact-page min-h-screen bg-gray-50 mt-[6.1rem]">
      <div className="max-w-screen-lg mx-auto px-4 py-10 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800">Send Us a Message</h2>
            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-dark transition duration-300 disabled:opacity-50"
                disabled={loading} // Disable button during loading
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="space-y-6 text-gray-700 mt-20">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <div>
              <h3 className="font-medium text-lg">Address</h3>
              <p>
                Lower Ground Floor
                Sudhi Villa. Block No. A-698/1395. Behind Netaji High School.
                Ulhasnagar - 421 005. Dist. Thane. Maharashtra.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg">Phone</h3>
              <p>+91 9890362318</p>
              <p>+91 8855024000</p>
            </div>
            <div>
              <h3 className="font-medium text-lg">Email</h3>
              <p>Neoelevators08@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
