// pages/Contact.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Add this import
import { useState } from 'react';
import BookingModal from '../components/BookingModal'; // Add this import
import './Contact.css';

const Contact = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      details: ['Nagpur', 'Maharashtra, India']
    },
    {
      icon: '📞',
      title: 'Phone / WhatsApp',
      details: ['+91 8999639059', '+91 7758-048373']
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['khushyalisingh10@gmail.com']
    },
    {
      icon: '🕐',
      title: 'Hours',
      details: ['Mon - Sat: 6:00 AM - 8:00 PM', 'Sun: 8:00 AM - 12:00 PM']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact"
    >
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Begin your journey with Khushyog today
          </motion.p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="contact-info-section">
        <div className="info-grid">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="info-card"
            >
              <div className="info-icon-wrapper">
                <span className="info-icon">{info.icon}</span>
              </div>
              <h3>{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="form-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="form-content"
          >
            <div className="form-header">
              <h2 className="section-title">Send us a Message</h2>
              <p className="form-subtitle">We'd love to hear from you</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="offline-yoga">Offline Yoga Classes</option>
                  <option value="online-yoga">Online Yoga Classes</option>
                  <option value="teacher-training">Teacher Training</option>
                  <option value="meditation">Meditation Classes</option>
                  <option value="theta-healing">Theta Healing</option>
                  <option value="pranic-healing">Pranic Healing</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help you..."
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="form-visual"
          >
            <div className="contact-logo">
              <img src="/images/logo.jpeg" alt="Khushyog Logo" />
            </div>
            <div className="quick-contact">
              <h3>Quick Connect</h3>
              <div className="quick-contact-item">
                <span className="quick-icon">📞</span>
                <a href="tel:+918999639059">+91 8999639059</a>
              </div>
              <div className="quick-contact-item">
                <span className="quick-icon">📧</span>
                <a href="mailto:khushyalisingh10@gmail.com">khushyalisingh10@gmail.com</a>
              </div>
              <div className="quick-contact-item">
                <span className="quick-icon">💬</span>
                <a href={`https://wa.me/918999639059`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="map-container"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119064.5433851551!2d78.98713445!3d21.149812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf3b%3A0x19b4d3f5d3a5b3c3!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Khushyog Location"
          ></iframe>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="contact-cta-content"
        >
          <h2>Ready to Start Your Journey?</h2>
          <p>Book your trial yoga class today and experience the transformation</p>
          <button 
            onClick={() => setIsBookingModalOpen(true)}
            className="btn btn-primary btn-large"
          >
            Book Trial Class – ₹200
          </button>
        </motion.div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </motion.div>
  );
};

export default Contact;