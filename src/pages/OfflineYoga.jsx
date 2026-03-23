import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './OfflineYoga.css';

const OfflineYoga = () => {
  const phoneNumber = "918999639059"; // +91 8999639059
  const [activeTab, setActiveTab] = useState('morning'); // 'morning' or 'evening'

  const handleWhatsAppRedirect = (type = 'offline', price = '', timeSlot = '') => {
    let message = "";
    
    if (type === 'trial') {
      message = `Hello Khushyog! 👋
I'm interested in booking a Trial Yoga Class (₹200). 
Please share more details about the offline class schedule.`;
    } else if (type === 'book') {
      message = `Hello Khushyog! 👋
I'm interested in booking a class at ${timeSlot}.
Please confirm availability and share more details.`;
    } else {
      message = `Hello Khushyog! 👋
I'm interested in your Offline Yoga Classes. 
Please share more details about the schedule and pricing.`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const benefits = [
    { icon: '💪', title: 'Build Strength', desc: 'Develop physical strength and endurance' },
    { icon: '🧘', title: 'Improve Flexibility', desc: 'Enhance your range of motion' },
    { icon: '🌬️', title: 'Breath Control', desc: 'Master pranayama techniques' },
    { icon: '😌', title: 'Stress Relief', desc: 'Reduce anxiety and find peace' },
    { icon: '⚡', title: 'Energy Boost', desc: 'Increase vitality and stamina' },
    { icon: '❤️', title: 'Better Health', desc: 'Improve overall wellbeing' }
  ];

  // New Weekly Focus
  const weeklyFocus = [
    { day: 'Monday', focus: 'Balance Day', icon: '⚖️', description: 'Focus on balancing poses and stability' },
    { day: 'Tuesday', focus: 'Arms Day', icon: '💪', description: 'Build upper body strength and arm balance' },
    { day: 'Wednesday', focus: 'Heart Opening & Back Day', icon: '❤️', description: 'Chest opening and backbends' },
    { day: 'Thursday', focus: 'Core Day', icon: '🎯', description: 'Strengthen abdominal muscles and core' },
    { day: 'Friday', focus: 'Leg Day', icon: '🦵', description: 'Lower body strength and flexibility' },
    { day: 'Saturday', focus: 'Funday', icon: '🎉', description: 'Fun flow with creative sequences' }
  ];

  // New Time Batches
  const timeBatches = {
    morning: [
      '6:00 – 7:00 AM',
      '7:00 – 8:00 AM',
      '8:00 – 9:00 AM',
      '9:00 – 10:00 AM'
    ],
    evening: [
      '5:15 – 6:15 PM'
    ]
  };

  const pricing = [
    { 
      plan: 'Trial Class',
      price: '₹200',
      features: ['Single Session', 'All Equipment Provided', 'Beginner Friendly'],
      popular: false,
      type: 'trial'
    },
    { 
      plan: '1 Month',
      price: '₹2500',
      features: ['Unlimited Classes', 'Priority Booking', 'Personal Guidance'],
      popular: true,
      type: 'monthly'
    },
    { 
      plan: '3 Months',
      price: '₹6000',
      features: ['Save ₹1500', 'Monthly Progress Review', 'Free Workshop Access'],
      popular: false,
      type: 'quarterly'
    },
    { 
      plan: '6 Months',
      price: '₹10000',
      features: ['Save ₹5000', 'Personalized Plan', 'Diet Consultation'],
      popular: false,
      type: 'halfyearly'
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={() => handleWhatsAppRedirect('trial')}
              className="btn btn-primary btn-large"
            >
              Book Trial Class – ₹200
            </button>
          </motion.div>
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

      {/* Weekly Focus Section - New */}
      <section className="weekly-focus-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Weekly Focus</h2>
          <p className="section-subtitle">Each day has a unique theme to work on different aspects of your body</p>
        </motion.div>

        <div className="weekly-focus-grid">
          {weeklyFocus.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="focus-card"
            >
              <div className="focus-icon">{item.icon}</div>
              <div className="focus-day">{item.day}</div>
              <h3 className="focus-title">{item.focus}</h3>
              <p className="focus-description">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Class Schedule Section - Updated with Time Batches */}
      <section className="schedule-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Class Schedule</h2>
          <p className="section-subtitle">Choose your preferred time slot</p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="schedule-tabs">
          <button 
            className={`tab-btn ${activeTab === 'morning' ? 'active' : ''}`}
            onClick={() => setActiveTab('morning')}
          >
            🌅 Morning Batch
          </button>
          <button 
            className={`tab-btn ${activeTab === 'evening' ? 'active' : ''}`}
            onClick={() => setActiveTab('evening')}
          >
            🌙 Evening Batch
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="schedule-container"
        >
          <div className="time-slots">
            {timeBatches[activeTab].map((time, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="time-slot-card"
              >
                <div className="time-slot-icon">⏰</div>
                <div className="time-slot-details">
                  <div className="time-slot-time">{time}</div>
                  <div className="time-slot-days">
                    {activeTab === 'morning' ? 'Monday - Saturday' : 'Monday - Friday'}
                  </div>
                </div>
                <button 
                  onClick={() => handleWhatsAppRedirect('book', '', time)}
                  className="btn btn-small btn-outline time-slot-btn"
                >
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
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
                onClick={() => handleWhatsAppRedirect(plan.type, plan.price)}
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
            onClick={() => handleWhatsAppRedirect('trial')}
            className="btn btn-primary btn-large"
          >
            Book Trial Class – ₹200
          </button>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default OfflineYoga;