// pages/ThetaHealing.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ThetaHealing.css';

const ThetaHealing = () => {
  const phoneNumber = "918999639059"; // +91 8999639059

  const handleWhatsAppRedirect = () => {
    const message = `Hello Khushyog! 👋
I'm interested in Theta Healing Sessions (₹1888 per session). 
Please share more details about the sessions and availability.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const handlePackageRedirect = () => {
    const message = `Hello Khushyog! 👋
I'm interested in the Theta Healing Package (3 sessions for ₹5000). 
Please share more details about the sessions and availability.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const benefits = [
    {
      icon: '💫',
      title: 'Emotional Healing',
      desc: 'Release deep-seated emotional wounds and patterns'
    },
    {
      icon: '🔄',
      title: 'Transform Beliefs',
      desc: 'Identify and change limiting subconscious beliefs'
    },
    {
      icon: '❤️',
      title: 'Relationship Healing',
      desc: 'Heal relationship patterns and attract healthy connections'
    },
    {
      icon: '🌟',
      title: 'Self-Worth',
      desc: 'Boost confidence and self-esteem'
    },
    {
      icon: '🌊',
      title: 'Stress Release',
      desc: 'Release anxiety and find inner calm'
    },
    {
      icon: '💰',
      title: 'Abundance Blocks',
      desc: 'Clear blocks to prosperity and success'
    },
    {
      icon: '🌱',
      title: 'Personal Growth',
      desc: 'Accelerate your spiritual and personal development'
    },
    {
      icon: '🧠',
      title: 'Inner Wisdom',
      desc: 'Connect with your intuition and higher self'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Connection',
      desc: 'We begin by creating a safe, sacred space and connecting with your intention',
      color: '#FF6B6B'
    },
    {
      step: '02',
      title: 'Identification',
      desc: 'Identify the root beliefs and patterns that are holding you back',
      color: '#4ECDC4'
    },
    {
      step: '03',
      title: 'Release',
      desc: 'Gently release and transform these limiting beliefs at the subconscious level',
      color: '#45B7D1'
    },
    {
      step: '04',
      title: 'Integration',
      desc: 'Integrate new, empowering beliefs and seal the healing',
      color: '#96CEB4'
    }
  ];

  const techniques = [
    {
      name: 'Intuitive Scanning',
      desc: 'Reading energy and identifying blocks'
    },
    {
      name: 'Belief Work',
      desc: 'Transforming core limiting beliefs'
    },
    {
      name: 'Digging',
      desc: 'Finding root causes of issues'
    },
    {
      name: 'Feeling Work',
      desc: 'Releasing trapped emotions'
    },
    {
      name: 'Genealogy Healing',
      desc: 'Healing ancestral patterns'
    },
    {
      name: 'Future Healing',
      desc: 'Clearing future fears and blocks'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="theta-healing"
    >
      {/* Hero Section */}
      <section className="theta-hero">
        <div className="theta-hero-overlay"></div>
        <div className="theta-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Theta Healing Sessions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform subconscious beliefs and emotional patterns through deep energy healing
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={handleWhatsAppRedirect}
              className="btn btn-primary btn-large"
            >
              Book Your Session
            </button>
          </motion.div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="understanding-section">
        <div className="understanding-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="understanding-content"
          >
            <h2 className="section-title">Understanding Theta Healing</h2>
            <p>
              Theta Healing is a powerful subconscious healing technique that helps identify 
              and transform limiting beliefs and emotional blocks at their root level.
            </p>
            <p>
              Many life patterns originate from subconscious beliefs formed in childhood or 
              past experiences. Theta Healing allows us to become aware of these patterns 
              and gently shift them to create lasting positive change.
            </p>
            <div className="theta-quote">
              <span className="quote-mark">"</span>
              Healing begins when we become aware of what's holding us back
              <span className="quote-mark">"</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="understanding-visual"
          >
            <div className="brain-wave-container">
              <div className="brain-outline">
                <div className="brain-left"></div>
                <div className="brain-right"></div>
              </div>
              <div className="wave-group">
                <div className="wave theta-wave-1"></div>
                <div className="wave theta-wave-2"></div>
                <div className="wave theta-wave-3"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="theta-benefits-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">What Theta Healing Can Help With</h2>
          <p className="section-subtitle">Transform every aspect of your life</p>
        </motion.div>

        <div className="theta-benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="theta-benefit-card"
            >
              <div className="theta-benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="theta-process-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header light"
        >
          <h2 className="section-title">The Healing Process</h2>
          <p className="section-subtitle">A journey of transformation</p>
        </motion.div>

        <div className="theta-process-grid">
          {process.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="theta-process-card"
              style={{ borderColor: item.color }}
            >
              <div className="theta-process-number" style={{ background: item.color }}>
                {item.step}
              </div>
              <h3 style={{ color: item.color }}>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Techniques Section */}
      <section className="techniques-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Healing Techniques</h2>
          <p className="section-subtitle">Powerful methods for deep transformation</p>
        </motion.div>

        <div className="techniques-container">
          {techniques.map((technique, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="technique-item"
            >
              <div className="technique-dot"></div>
              <div className="technique-content">
                <h3>{technique.name}</h3>
                <p>{technique.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Session Details */}
      <section className="theta-session-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="session-card"
        >
          <h2>Session Details</h2>
          <div className="session-details-grid">
            <div className="session-detail-item">
              <span className="detail-label">Duration</span>
              <span className="detail-value">Approximately 60 minutes</span>
            </div>
            <div className="session-detail-item">
              <span className="detail-label">Energy Exchange</span>
              <span className="detail-value price">₹1888</span>
            </div>
            <div className="session-detail-item">
              <span className="detail-label">Mode</span>
              <span className="detail-value">In-person or Online</span>
            </div>
            <div className="session-detail-item">
              <span className="detail-label">Package (3 sessions)</span>
              <span className="detail-value price">₹5000 (Save ₹664)</span>
            </div>
          </div>
          <div className="session-buttons">
            <button 
              onClick={handleWhatsAppRedirect}
              className="btn btn-primary btn-large session-btn"
            >
              Book Single Session
            </button>
            <button 
              onClick={handlePackageRedirect}
              className="btn btn-secondary btn-large session-btn"
            >
              Book Package (3 Sessions)
            </button>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="theta-testimonials">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header light"
        >
          <h2 className="section-title">Healing Experiences</h2>
          <p className="section-subtitle">What our clients say</p>
        </motion.div>

        <div className="testimonials-grid">
          {[
            {
              text: "The Theta Healing session helped me release childhood trauma I'd been carrying for years. I feel lighter and more at peace.",
              name: "Meera K.",
              location: "Nagpur"
            },
            {
              text: "I struggled with self-doubt and anxiety. After just one session, I noticed a significant shift in my confidence.",
              name: "Arjun S.",
              location: "Mumbai"
            },
            {
              text: "The healing was profound. It helped me understand patterns I was stuck in and gave me tools to move forward.",
              name: "Priya R.",
              location: "Pune"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="testimonial-card"
            >
              <div className="testimonial-quote">❝</div>
              <p>{testimonial.text}</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="theta-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="theta-cta-content"
        >
          <h2>Ready to Transform Your Life?</h2>
          <p>Experience the power of Theta Healing for yourself</p>
          <button 
            onClick={handleWhatsAppRedirect}
            className="btn btn-primary btn-large"
          >
            Schedule Your Session Today
          </button>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ThetaHealing;