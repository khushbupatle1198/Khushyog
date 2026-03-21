// pages/PersonalYoga.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import './PersonalYoga.css';

const PersonalYoga = () => {
  const phoneNumber = "918999639059";
  const [selectedMode, setSelectedMode] = useState('both'); // 'online', 'offline', 'both'

  const handleWhatsAppRedirect = (type = 'personal', mode = '') => {
    let message = "";
    
    if (type === 'trial') {
      message = `Hello Khushyog! 👋
I'm interested in booking a Trial Personal Yoga Class (₹200). 
Mode: ${mode === 'online' ? 'Online' : mode === 'offline' ? 'Offline' : 'Flexible (Online/Offline)'}
Please share more details about availability and schedule.`;
    } 
    else if (type === 'package') {
      message = `Hello Khushyog! 👋
I'm interested in the Personal Yoga Package (${mode === 'online' ? 'Online' : mode === 'offline' ? 'Offline' : 'Flexible'} Mode).
Please share details about:
- Available time slots
- Session structure
- Customization options
- Package benefits`;
    }
    else {
      message = `Hello Khushyog! 👋
I'm interested in Personal Yoga Training.
Mode Preference: ${mode === 'online' ? 'Online' : mode === 'offline' ? 'Offline' : 'Flexible (Both options)'}
Please share more details about:
- Available schedules
- Pricing for ${mode === 'online' ? 'online' : mode === 'offline' ? 'offline' : 'both'} sessions
- Customized plan options
- Your availability for consultation`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const features = [
    {
      icon: '🎯',
      title: 'Personalized Practice',
      desc: 'Yoga designed specifically for your body, goals, and energy level'
    },
    {
      icon: '💚',
      title: 'Deep Healing',
      desc: 'Focus on recovery from injury, stress, or health imbalances'
    },
    {
      icon: '⏰',
      title: 'Flexible Schedule',
      desc: 'Choose timings that work best for your lifestyle'
    },
    {
      icon: '👤',
      title: 'One-on-One Attention',
      desc: 'Complete personal guidance without any distractions'
    },
    {
      icon: '🔄',
      title: 'Your Pace',
      desc: 'Practice at your own speed with no pressure or comparison'
    },
    {
      icon: '📍',
      title: 'Flexible Location',
      desc: 'Available both online and offline as per your preference'
    }
  ];

  const benefits = [
    'Practice yoga at your own comfortable pace',
    'Heal from injury, stress, or health imbalances',
    'Enjoy complete personal attention and guidance',
    'Customized sequences for your specific needs',
    'Progress tracking and regular feedback',
    'Holistic approach combining asana, pranayama, and meditation',
    'Flexible scheduling that fits your routine',
    'Dedicated support between sessions'
  ];

  const pricing = [
    {
      plan: 'Trial Session',
      price: '₹200',
      duration: '1 Session',
      features: [
        '60-minute personalized session',
        'Initial assessment and consultation',
        'Customized practice for your needs',
        'Take-home practice tips'
      ],
      popular: false,
      type: 'trial',
      mode: 'flexible'
    },
    {
      plan: 'Single Session',
      price: '₹1200',
      duration: '1 Session',
      features: [
        '60-75 minute one-on-one session',
        'Personalized practice plan',
        'Focus on your specific goals',
        'Post-session guidance'
      ],
      popular: false,
      type: 'single',
      mode: 'flexible'
    },
    {
      plan: 'Monthly Package',
      price: '₹4000',
      duration: '4 Sessions',
      features: [
        '4 personalized sessions (weekly)',
        'Customized practice sequence',
        'WhatsApp support between sessions',
        'Progress assessment',
        'Save ₹800'
      ],
      popular: true,
      type: 'monthly',
      mode: 'flexible'
    },
    {
      plan: 'Deep Healing',
      price: '₹7500',
      duration: '8 Sessions',
      features: [
        '8 personalized sessions (bi-weekly)',
        'Complete healing protocol',
        'Unlimited WhatsApp support',
        'Personalized home practice plan',
        'Progress tracking report',
        'Save ₹2100'
      ],
      popular: false,
      type: 'package',
      mode: 'flexible'
    }
  ];

  const scheduleOptions = [
    { time: 'Early Morning', slot: '6:00 AM - 7:30 AM', availability: 'Limited' },
    { time: 'Morning', slot: '8:00 AM - 9:30 AM', availability: 'Available' },
    { time: 'Late Morning', slot: '10:00 AM - 11:30 AM', availability: 'Available' },
    { time: 'Afternoon', slot: '3:00 PM - 4:30 PM', availability: 'Available' },
    { time: 'Evening', slot: '5:00 PM - 6:30 PM', availability: 'Limited' },
    { time: 'Late Evening', slot: '7:00 PM - 8:30 PM', availability: 'Available' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="personal-yoga"
    >
      {/* Hero Section */}
      <section className="personal-hero">
        <div className="personal-hero-pattern"></div>
        <div className="personal-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-badge"
          >
            ✨ Your Practice, Your Way ✨
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Personal Yoga Training
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-quote"
          >
            "This is your time—just for you. In private yoga sessions, 
            everything is designed around your body, energy, and lifestyle."
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-description"
          >
            If you're looking for deeper healing, recovery, or focused support, 
            this is a beautiful way to align with your unique needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-buttons"
          >
          </motion.div>
        </div>
      </section>

      {/* Mode Selection Banner */}
      <section className="mode-banner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mode-container"
        >
          <div className="mode-text">
            <h3>Available in Both Formats</h3>
            <p>Choose what works best for you - Online or Offline, or combine both!</p>
          </div>
          <div className="mode-badges">
            <div className="mode-badge online">
              <span className="mode-icon">💻</span>
              <span>Online Sessions</span>
              <small>Practice from anywhere</small>
            </div>
            <div className="mode-badge offline">
              <span className="mode-icon">🏠</span>
              <span>Offline Sessions</span>
              <small>In-person guidance</small>
            </div>
            <div className="mode-badge flexible">
              <span className="mode-icon">🔄</span>
              <span>Flexible Mix</span>
              <small>Switch as needed</small>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Perfect For Section */}
      <section className="perfect-for">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Perfect For You If You Want To</h2>
        </motion.div>

        <div className="perfect-grid">
          {[
            { icon: '🧘‍♀️', text: 'Practice yoga at your own pace' },
            { icon: '💚', text: 'Heal from injury, stress, or health imbalances' },
            { icon: '👁️', text: 'Enjoy personal attention and guidance' },
            { icon: '🎯', text: 'Focus on specific health goals' },
            { icon: '🌙', text: 'Deepen your existing practice' },
            { icon: '✨', text: 'Build consistency with accountability' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="perfect-item"
            >
              <span className="perfect-icon">{item.icon}</span>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="personal-features">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Why Choose Personal Training</h2>
          <p className="section-subtitle">Experience yoga that truly understands you</p>
        </motion.div>

        <div className="features-grid-personal">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="feature-card-personal"
            >
              <div className="feature-icon-personal">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="personal-benefits">
        <div className="benefits-container-personal">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="benefits-content-personal"
          >
            <h2 className="section-title">What Makes Personal Training Special</h2>
            <ul className="benefits-list-personal">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="benefit-check-personal">✓</span>
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="benefits-visual-personal"
          >
            <div className="meditation-glow">
              <div className="glow-core"></div>
              <div className="glow-ring"></div>
              <div className="glow-ring-2"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section-personal">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Investment in Your Wellness</h2>
          <p className="section-subtitle">Choose the package that aligns with your journey</p>
        </motion.div>

        <div className="pricing-grid-personal">
          {pricing.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`pricing-card-personal ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge-personal">Most Popular</div>}
              <h3 className="plan-name-personal">{plan.plan}</h3>
              <div className="plan-duration">{plan.duration}</div>
              <div className="plan-price-personal">
                <span className="price-personal">{plan.price}</span>
              </div>
              <ul className="plan-features-personal">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <button 
                onClick={() => handleWhatsAppRedirect(plan.type, plan.mode)}
                className="btn btn-primary plan-btn-personal"
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Schedule Options */}
      <section className="schedule-section-personal">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Flexible Scheduling</h2>
          <p className="section-subtitle">Choose timings that work for your lifestyle</p>
        </motion.div>

        <div className="schedule-grid-personal">
          {scheduleOptions.map((slot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="schedule-card-personal"
            >
              <div className="schedule-time-personal">{slot.time}</div>
              <div className="schedule-slot">{slot.slot}</div>
              <div className={`schedule-availability ${slot.availability === 'Available' ? 'available' : 'limited'}`}>
                {slot.availability}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="personal-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="personal-cta-content"
        >
          <h2>Begin Your Personal Yoga Journey</h2>
          <p>One-on-one guidance tailored just for you</p>
          <div className="cta-buttons">
            <button 
              onClick={() => handleWhatsAppRedirect('trial', 'both')}
              className="btn btn-primary btn-large"
            >
              Book Trial Session – ₹200
            </button>
            <button 
              onClick={() => handleWhatsAppRedirect('consultation', 'both')}
              className="btn btn-outline btn-large"
            >
              Free Consultation
            </button>
          </div>
          <p className="cta-note">✨ Available both Online and Offline | Flexible scheduling ✨</p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default PersonalYoga;