// pages/OnlineYoga.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './OnlineYoga.css';

const OnlineYoga = () => {
  const phoneNumber = "918999639059"; // +91 8999639059

  const handleWhatsAppRedirect = (type = 'online', price = '') => {
    let message = "";
    
    if (type === 'trial') {
      message = `Hello Khushyog! 👋
I'm interested in booking a Trial Online Yoga Class (₹200). 
Please share more details about the online class schedule.`;
    } else {
      message = `Hello Khushyog! 👋
I'm interested in your Online Yoga Classes. 
Please share more details about the schedule and pricing.`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const features = [
    {
      icon: '🏠',
      title: 'Practice from Home',
      desc: 'Join classes from the comfort of your own space'
    },
    {
      icon: '📱',
      title: 'Flexible Schedule',
      desc: 'Choose timings that work best for you'
    },
    {
      icon: '👥',
      title: 'Live Interaction',
      desc: 'Real-time guidance and corrections'
    },
    {
      icon: '📹',
      title: 'Recorded Sessions',
      desc: 'Access recordings of past classes'
    },
    {
      icon: '💬',
      title: 'Personal Support',
      desc: 'Dedicated support via chat/WhatsApp'
    },
    {
      icon: '🌍',
      title: 'Global Community',
      desc: 'Connect with practitioners worldwide'
    }
  ];

  const benefits = [
    'No commute time - practice instantly',
    'Access from anywhere in the world',
    'Learn at your own pace',
    'Personal attention in small batches',
    'Flexible rescheduling options',
    'Recorded sessions for revision',
    'One-on-one feedback sessions',
    'Affordable pricing options'
  ];

  const schedule = [
    { time: '6:00 AM - 7:00 AM', level: 'Beginner', language: 'English/Hindi' },
    { time: '7:30 AM - 8:30 AM', level: 'Intermediate', language: 'English' },
    { time: '5:00 PM - 6:00 PM', level: 'Beginner', language: 'English/Hindi' },
    { time: '6:30 PM - 7:30 PM', level: 'All Levels', language: 'English' },
    { time: '8:00 PM - 9:00 PM', level: 'Gentle Yoga', language: 'English/Hindi' }
  ];

  const pricing = [
    {
      plan: 'Trial Class',
      price: '₹200',
      features: ['Single Session', 'Live Interaction', 'Basic Guidance'],
      popular: false,
      type: 'trial'
    },
    {
      plan: 'Monthly Pass',
      price: '₹2000',
      features: ['Unlimited Classes', 'Recorded Sessions', 'Personal Support'],
      popular: true,
      type: 'monthly'
    },
    {
      plan: '3 Months Pack',
      price: '₹5500',
      features: ['Save ₹500', 'Priority Booking', 'Monthly Check-in'],
      popular: false,
      type: 'quarterly'
    },
    {
      plan: 'Yearly Membership',
      price: '₹18000',
      features: ['Best Value', 'Exclusive Workshops', 'Diet Consultation'],
      popular: false,
      type: 'yearly'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="online-yoga"
    >
      {/* Hero Section */}
      <section className="online-hero">
        <div className="online-hero-overlay"></div>
        <div className="online-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Online Yoga Classes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Practice yoga from the comfort of your home with structured and guided sessions
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

      {/* Features Grid */}
      <section className="online-features">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Why Choose Online Classes</h2>
          <p className="section-subtitle">Experience the convenience of digital yoga</p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="feature-card"
            >
              <div className="feature-icon-large">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="online-benefits">
        <div className="benefits-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="benefits-content"
          >
            <h2 className="section-title">Benefits of Online Yoga</h2>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="benefit-check">✓</span>
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="benefits-visual"
          >
            <div className="yoga-device">
              <div className="device-screen">
                <div className="yoga-pose"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="online-schedule">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Class Schedule</h2>
          <p className="section-subtitle">Choose your preferred time slot</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="schedule-cards"
        >
          {schedule.map((slot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="schedule-card"
            >
              <div className="schedule-time">{slot.time}</div>
              <div className="schedule-details">
                <span className="schedule-level">{slot.level}</span>
                <span className="schedule-language">{slot.language}</span>
              </div>
              <button 
                onClick={() => handleWhatsAppRedirect('online')}
                className="btn btn-secondary schedule-btn"
              >
                Join Class
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="online-pricing">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Membership Plans</h2>
          <p className="section-subtitle">Flexible plans for every need</p>
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
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">How It Works</h2>
        </motion.div>

        <div className="steps-grid">
          {[
            { step: '1', title: 'Book Your Class', desc: 'Select your preferred time slot and book online' },
            { step: '2', title: 'Get Link', desc: 'Receive Zoom/Google Meet link via email/WhatsApp' },
            { step: '3', title: 'Join & Practice', desc: 'Join the session and practice with live guidance' },
            { step: '4', title: 'Get Recordings', desc: 'Access recorded sessions for future practice' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="step-card"
            >
              <div className="step-number">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="online-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="online-cta-content"
        >
          <h2>Start Your Online Yoga Journey Today</h2>
          <p>Join our global community of yoga practitioners</p>
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

export default OnlineYoga;