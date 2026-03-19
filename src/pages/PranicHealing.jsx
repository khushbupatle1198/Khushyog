// pages/PranicHealing.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PranicHealing.css';

const PranicHealing = () => {
  const principles = [
    {
      title: 'Energy Body',
      desc: 'We have an energy body that supports and sustains the physical body'
    },
    {
      title: 'Prana',
      desc: 'Life force energy that flows through the energy body'
    },
    {
      title: 'Self-Healing',
      desc: 'The body has the innate ability to heal itself'
    },
    {
      title: 'Cleansing',
      desc: 'Removing diseased energy from the energy body'
    },
    {
      title: 'Energizing',
      desc: 'Fresh prana to accelerate healing'
    },
    {
      title: 'No Touch',
      desc: 'Healing is done without physical contact'
    }
  ];

  const benefits = [
    'Accelerates physical healing',
    'Reduces stress and tension',
    'Balances emotions',
    'Improves mental clarity',
    'Enhances overall wellbeing',
    'Clears energy blocks',
    'Boosts immune system',
    'Promotes deep relaxation'
  ];

  const process = [
    {
      step: 'Initial Scan',
      desc: 'Assess the energy body for imbalances'
    },
    {
      step: 'Cleansing',
      desc: 'Remove diseased or congested energy'
    },
    {
      step: 'Energizing',
      desc: 'Fresh prana to the affected areas'
    },
    {
      step: 'Stabilizing',
      desc: 'Lock in the healing energy'
    },
    {
      step: 'Releasing',
      desc: 'Let go of what no longer serves'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pranic-healing"
    >
      {/* Hero Section */}
      <section className="pranic-hero">
        <div className="pranic-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pranic Healing Sessions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Energy healing technique that helps balance and cleanse the body's energy system
          </motion.p>
        </div>
      </section>

      {/* What is Pranic Healing */}
      <section className="what-is-section">
        <div className="what-is-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="what-is-content"
          >
            <h2 className="section-title">What is Pranic Healing?</h2>
            <p>
              Pranic Healing is an energy healing system that works with the body's energy field 
              to promote balance and wellbeing.
            </p>
            <p>
              It focuses on cleansing and energizing the energy body to support physical and 
              emotional healing. This no-touch technique uses prana or life force to accelerate 
              the body's innate healing ability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="what-is-visual"
          >
            <div className="energy-field">
              <div className="energy-ring"></div>
              <div className="energy-ring"></div>
              <div className="energy-ring"></div>
              <div className="energy-core"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="principles-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Key Principles</h2>
          <p className="section-subtitle">Understanding the foundation of Pranic Healing</p>
        </motion.div>

        <div className="principles-grid">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="principle-card"
            >
              <h3>{principle.title}</h3>
              <p>{principle.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="pranic-benefits">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Benefits of Pranic Healing</h2>
        </motion.div>

        <div className="pranic-benefits-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="benefits-list-large"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="benefit-item-large"
              >
                <span className="benefit-bullet">✦</span>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="benefits-visual"
          >
            <div className="chakra-wheel">
              <div className="chakra chakra-1"></div>
              <div className="chakra chakra-2"></div>
              <div className="chakra chakra-3"></div>
              <div className="chakra chakra-4"></div>
              <div className="chakra chakra-5"></div>
              <div className="chakra chakra-6"></div>
              <div className="chakra chakra-7"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healing Process */}
      <section className="process-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">The Healing Process</h2>
        </motion.div>

        <div className="process-timeline">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="timeline-item"
            >
              <div className="timeline-number">{index + 1}</div>
              <div className="timeline-content">
                <h3>{step.step}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Session Info */}
      <section className="session-info">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="info-card-large"
        >
          <h2>Session Details</h2>
          <div className="info-details">
            <div className="info-row">
              <span>Duration:</span>
              <span>45-60 minutes</span>
            </div>
            <div className="info-row">
              <span>Energy Exchange:</span>
              <span>₹1500 per session</span>
            </div>
            <div className="info-row">
              <span>Package (4 sessions):</span>
              <span>₹5000 (Save ₹1000)</span>
            </div>
            <div className="info-row">
              <span>Mode:</span>
              <span>In-person or Distance healing</span>
            </div>
          </div>
          <Link to="/contact" className="btn btn-primary btn-large">
            Book Your Session
          </Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="pranic-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="pranic-cta-content"
        >
          <h2>Experience the Healing Power of Prana</h2>
          <p>Begin your healing journey today</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Schedule Your First Session
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default PranicHealing;