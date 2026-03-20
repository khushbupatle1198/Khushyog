// pages/Meditation.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Meditation.css';

const Meditation = () => {
  const phoneNumber = "918999639059"; // +91 8999639059

  const handleWhatsAppRedirect = () => {
    const message = `Hello Khushyog! 👋
I'm interested in your Meditation Classes. 
Please share more details about the schedule and pricing.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const benefits = [
    {
      icon: '🧠',
      title: 'Mental Clarity',
      desc: 'Improve focus and concentration'
    },
    {
      icon: '😌',
      title: 'Stress Reduction',
      desc: 'Lower stress and anxiety levels'
    },
    {
      icon: '❤️',
      title: 'Emotional Balance',
      desc: 'Achieve greater emotional stability'
    },
    {
      icon: '💭',
      title: 'Self Awareness',
      desc: 'Develop deeper self-understanding'
    },
    {
      icon: '😊',
      title: 'Inner Peace',
      desc: 'Experience lasting calmness'
    },
    {
      icon: '⚡',
      title: 'Energy Boost',
      desc: 'Increase vitality and zest for life'
    }
  ];

  const techniques = [
    {
      name: 'Mindfulness Meditation',
      duration: '15-30 mins',
      desc: 'Focus on present moment awareness'
    },
    {
      name: 'Breath Awareness',
      duration: '10-20 mins',
      desc: 'Observe natural breath flow'
    },
    {
      name: 'Mantra Meditation',
      duration: '15-25 mins',
      desc: 'Repeat calming sounds or phrases'
    },
    {
      name: 'Body Scan',
      duration: '20-30 mins',
      desc: 'Systematic body relaxation'
    },
    {
      name: 'Loving-Kindness',
      duration: '20-30 mins',
      desc: 'Cultivate compassion for self and others'
    },
    {
      name: 'Walking Meditation',
      duration: '15-20 mins',
      desc: 'Mindful movement practice'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="meditation"
    >
      {/* Hero Section */}
      <section className="meditation-hero">
        <div className="meditation-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meditation Classes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn techniques to calm the mind, develop awareness, and experience inner peace
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
              Join a Free Trial Class
            </button>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="meditation-intro">
        <div className="intro-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="intro-text"
          >
            <h2 className="section-title">The Power of Meditation</h2>
            <p>
              Meditation is a powerful practice for calming the mind and developing deeper awareness.
              Khushyog meditation classes guide participants through techniques that help reduce 
              stress and bring mental clarity.
            </p>
            <p>
              Whether you're a beginner or experienced practitioner, our classes provide a supportive 
              environment to deepen your practice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="intro-quote"
          >
            <blockquote>
              "The quieter you become, the more you can hear."
              <footer>- Ram Dass</footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="meditation-benefits">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Benefits of Meditation</h2>
          <p className="section-subtitle">Transform your life through regular practice</p>
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
              <div className="benefit-icon-circle">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
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
          <h2 className="section-title">Meditation Techniques</h2>
          <p className="section-subtitle">Explore different paths to inner peace</p>
        </motion.div>

        <div className="techniques-grid">
          {techniques.map((technique, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="technique-card"
            >
              <h3>{technique.name}</h3>
              <div className="technique-duration">{technique.duration}</div>
              <p>{technique.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Class Format */}
      <section className="class-format">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="format-container"
        >
          <h2 className="section-title">Class Format</h2>
          <div className="format-grid">
            <div className="format-item">
              <span className="format-number">01</span>
              <h3>Centering</h3>
              <p>Brief grounding and intention setting</p>
            </div>
            <div className="format-item">
              <span className="format-number">02</span>
              <h3>Breath Awareness</h3>
              <p>Connect with natural breath</p>
            </div>
            <div className="format-item">
              <span className="format-number">03</span>
              <h3>Guided Practice</h3>
              <p>Step-by-step meditation guidance</p>
            </div>
            <div className="format-item">
              <span className="format-number">04</span>
              <h3>Silent Sitting</h3>
              <p>Extended period of silence</p>
            </div>
            <div className="format-item">
              <span className="format-number">05</span>
              <h3>Integration</h3>
              <p>Gradual return and reflection</p>
            </div>
            <div className="format-item">
              <span className="format-number">06</span>
              <h3>Q&A</h3>
              <p>Discussion and questions</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="meditation-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="meditation-cta-content"
        >
          <h2>Begin Your Meditation Journey</h2>
          <p>Join our classes and discover the peace within</p>
          <button 
            onClick={handleWhatsAppRedirect}
            className="btn btn-primary btn-large"
          >
            Join a Free Trial Class
          </button>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Meditation;