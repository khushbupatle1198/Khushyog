// pages/OfflineYoga.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BookingModal from '../components/BookingModal';
import './OfflineYoga.css';

const OfflineYoga = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const benefits = [
    { icon: '💪', title: 'Build Strength', desc: 'Develop physical strength and endurance' },
    { icon: '🧘', title: 'Improve Flexibility', desc: 'Enhance your range of motion' },
    { icon: '🌬️', title: 'Breath Control', desc: 'Master pranayama techniques' },
    { icon: '😌', title: 'Stress Relief', desc: 'Reduce anxiety and find peace' },
    { icon: '⚡', title: 'Energy Boost', desc: 'Increase vitality and stamina' },
    { icon: '❤️', title: 'Better Health', desc: 'Improve overall wellbeing' }
  ];

  const schedule = [
    { day: 'Monday', time: '7:00 AM - 8:00 AM', type: 'Hatha Yoga' },
    { day: 'Tuesday', time: '7:00 AM - 8:00 AM', type: 'Vinyasa Flow' },
    { day: 'Wednesday', time: '7:00 AM - 8:00 AM', type: 'Hatha Yoga' },
    { day: 'Thursday', time: '7:00 AM - 8:00 AM', type: 'Vinyasa Flow' },
    { day: 'Friday', time: '7:00 AM - 8:00 AM', type: 'Hatha Yoga' },
    { day: 'Saturday', time: '8:00 AM - 9:30 AM', type: 'Workshop' },
    { day: 'Sunday', time: '8:00 AM - 9:00 AM', type: 'Restorative Yoga' }
  ];

  const pricing = [
    { 
      plan: 'Trial Class',
      price: '₹200',
      features: ['Single Session', 'All Equipment Provided', 'Beginner Friendly'],
      popular: false
    },
    { 
      plan: '1 Month',
      price: '₹2500',
      features: ['Unlimited Classes', 'Priority Booking', 'Personal Guidance'],
      popular: true
    },
    { 
      plan: '3 Months',
      price: '₹6000',
      features: ['Save ₹1500', 'Monthly Progress Review', 'Free Workshop Access'],
      popular: false
    },
    { 
      plan: '6 Months',
      price: '₹10000',
      features: ['Save ₹5000', 'Personalized Plan', 'Diet Consultation'],
      popular: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="offline-yoga"
    >
      {/* Hero Section */}
      <section className="yoga-hero">
        <div className="yoga-hero-overlay"></div>
        <div className="yoga-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="yoga-hero-title"
          >
            Offline Yoga Classes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="yoga-hero-subtitle"
          >
            Daily yoga sessions designed to improve physical health, 
            flexibility, and mental calmness
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Benefits of Offline Yoga</h2>
          <p className="section-subtitle">Experience the transformative power of in-person practice</p>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="benefit-card"
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Class Schedule */}
      <section className="schedule-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Weekly Schedule</h2>
          <p className="section-subtitle">Join us for daily practice</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="schedule-container"
        >
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Class Type</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td>{item.day}</td>
                  <td>{item.time}</td>
                  <td>{item.type}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Membership Plans</h2>
          <p className="section-subtitle">Choose the plan that fits your journey</p>
        </motion.div>

        <div className="pricing-grid">
          {pricing.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-name">{plan.plan}</h3>
              <div className="plan-price">
                <span className="price">{plan.price}</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="btn btn-primary plan-btn"
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="yoga-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="yoga-cta-content"
        >
          <h2>Ready to Start Your Journey?</h2>
          <p>Book your trial class today and experience the difference</p>
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

export default OfflineYoga;