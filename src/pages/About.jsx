// pages/About.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BookingModal from '../components/BookingModal';
import './About.css';

const About = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about"
    >
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-title"
          >
            About Khushyog
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-hero-decoration"
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="vision-content"
          >
            <h2 className="section-title">Our Vision</h2>
            <p className="vision-text">
              Khushyog was created to share the transformative power of yoga, 
              meditation, and inner healing.
            </p>
            <p className="vision-text">
              In today's fast-paced world, many people experience stress, emotional 
              overwhelm, and physical imbalance. Through the practices offered at 
              Khushyog, we aim to help individuals reconnect with themselves and 
              live a healthier and more conscious life.
            </p>
            <p className="vision-text">
              Khushyog is a space where people can explore not only physical yoga 
              practices but also deeper aspects of inner growth and healing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="vision-visual"
          >
            <div className="vision-card">
              <img src="/images/logo.jpeg" alt="Khushyog Logo" className="vision-logo" />
              <h3>Holistic Approach</h3>
              <p>Body, Mind & Spirit</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="founder-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="founder-image"
          >
            <div className="founder-image-wrapper">
              <div className="founder-image-placeholder">
                <span>Khushyali Singh</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="founder-content"
          >
            <h2 className="section-title">About the Founder</h2>
            <p className="founder-name">Khushyali Singh</p>
            <p className="founder-title">Yoga Teacher & Certified Theta Healer</p>
            <p className="founder-text">
              Khushyali Singh is a yoga teacher and certified Theta healer who 
              believes in combining physical practice with inner healing.
            </p>
            <p className="founder-text">
              Her journey with yoga and healing practices inspired her to create 
              Khushyog as a space where people can experience transformation 
              through awareness, movement, and energy healing.
            </p>
            <p className="founder-text">
              Her intention is to guide people toward balance, clarity, and 
              self-empowerment.
            </p>
            
            <div className="founder-stats">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students Taught</span>
              </div>
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Healing Sessions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">The principles that guide our practice</p>
        </motion.div>

        <div className="values-grid">
          {[
            { icon: '❤️', title: 'Compassion', desc: 'Approaching every individual with kindness and understanding' },
            { icon: '🌱', title: 'Growth', desc: 'Encouraging continuous personal and spiritual development' },
            { icon: '🤝', title: 'Community', desc: 'Building a supportive and inclusive environment' },
            { icon: '🧘', title: 'Authenticity', desc: 'Staying true to traditional yogic principles' }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="value-card"
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-cta-content"
        >
          <h2>Begin Your Journey with Khushyog</h2>
          <p>Yoga, meditation, and healing can transform the way we experience life.</p>
          <p>We invite you to become part of the Khushyog community.</p>
          <button 
            onClick={() => setIsBookingModalOpen(true)}
            className="btn btn-primary btn-large"
          >
            Book Your Trial Yoga Class today – ₹200
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

export default About;