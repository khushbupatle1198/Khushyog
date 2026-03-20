// pages/Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const phoneNumber = "918999639059"; // +91 8999639059

  const handleWhatsAppRedirect = (type, price = '') => {
    let message = "";
    
    switch(type) {
      case 'trial':
        message = `Hello Khushyog! 👋
I'm interested in booking a Trial Yoga Class (₹200). 
Please share more details about the class schedule.`;
        break;
      case 'offline':
        message = `Hello Khushyog! 👋
I'm interested in your Offline Yoga Classes. 
Please share more details about the schedule and pricing.`;
        break;
      case 'online':
        message = `Hello Khushyog! 👋
I'm interested in your Online Yoga Classes. 
Please share more details about the schedule and pricing.`;
        break;
      case 'teacher':
        message = `Hello Khushyog! 👋
I'm interested in the Teacher Training Course. 
Please share more details about the curriculum and fees.`;
        break;
      case 'meditation':
        message = `Hello Khushyog! 👋
I'm interested in Meditation Classes. 
Please share more details about the schedule.`;
        break;
      case 'theta':
        message = `Hello Khushyog! 👋
I'm interested in Theta Healing Sessions (₹1888). 
Please share more details about the sessions.`;
        break;
      case 'pranic':
        message = `Hello Khushyog! 👋
I'm interested in Pranic Healing Sessions (₹1500). 
Please share more details about the sessions.`;
        break;
      default:
        message = `Hello Khushyog! 👋
I'm interested in your services. Please share more details.`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const offerings = [
    {
      icon: '🧘',
      title: 'Offline Yoga Classes',
      description: 'Daily guided yoga classes to improve strength, flexibility, and overall wellbeing.',
      link: '/offline-yoga',
      bookingType: 'offline'
    },
    {
      icon: '💻',
      title: 'Online Yoga Classes',
      description: 'Practice yoga from the comfort of your home with structured and guided sessions.',
      link: '/online-yoga',
      bookingType: 'online'
    },
    {
      icon: '🎓',
      title: 'Teacher Training Course',
      description: 'A deeper journey for those who want to learn yoga in depth and share it with others.',
      link: '/teacher-training',
      bookingType: 'teacher'
    },
    {
      icon: '🧘‍♀️',
      title: 'Meditation Classes',
      description: 'Learn techniques to calm the mind, develop awareness, and experience inner peace.',
      link: '/meditation',
      bookingType: 'meditation'
    },
    {
      icon: '✨',
      title: 'Theta Healing Sessions',
      description: 'Transform subconscious beliefs and emotional patterns through deep energy healing.',
      link: '/theta-healing',
      bookingType: 'theta'
    },
    {
      icon: '🌿',
      title: 'Pranic Healing Sessions',
      description: 'Energy healing technique that helps balance and cleanse the body’s energy system.',
      link: '/pranic-healing',
      bookingType: 'pranic'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      text: 'Khushyog has helped me feel more peaceful and physically stronger. The environment is very positive.',
      rating: 5
    },
    {
      name: 'Rahul Verma',
      text: 'The healing session helped me understand patterns I was struggling with for years.',
      rating: 5
    },
    {
      name: 'Anita Desai',
      text: 'The yoga classes are transformative. I\'ve never felt better in my life!',
      rating: 5
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              Khushyog – Yoga, Meditation & Healing
              <span className="hero-title-gradient"> for a Balanced Life</span>
            </h1>
            
            <p className="hero-description">
              A space where ancient yogic practices meet modern healing techniques 
              to help you build a healthy body, peaceful mind, and aligned life.
            </p>
            
            <p className="hero-subdescription">
              At Khushyog, we offer yoga classes, meditation practices, healing sessions, 
              and teacher training programs designed to support your physical, emotional, 
              and spiritual wellbeing.
            </p>
        
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-visual"
          >
            <img src="/images/logo.jpeg" alt="Khushyog Logo" className="hero-logo" />
          </motion.div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="offerings-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Our Offerings</h2>
          <p className="section-subtitle">
            At Khushyog, we support your wellbeing through different practices 
            that nurture body, mind, and energy.
          </p>
        </motion.div>

        <div className="offerings-grid">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="offering-card"
            >
              <div className="offering-icon">{offering.icon}</div>
              <h3>{offering.title}</h3>
              <p>{offering.description}</p>
              <div className="card-actions">
                <Link to={offering.link} className="card-link">
                  Learn More →
                </Link>
               
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-choose-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="why-choose-content"
          >
            <h2 className="section-title">Why Choose Khushyog</h2>
            <ul className="features-list">
              <li>
                <span className="feature-check">✓</span>
                Beginner-friendly environment
              </li>
              <li>
                <span className="feature-check">✓</span>
                Holistic wellness approach
              </li>
              <li>
                <span className="feature-check">✓</span>
                Small batch personal attention
              </li>
              <li>
                <span className="feature-check">✓</span>
                Combination of yoga, meditation and energy healing
              </li>
              <li>
                <span className="feature-check">✓</span>
                Guided by experienced practitioner
              </li>
            </ul>
            <p className="why-choose-quote">
              Khushyog is not just about physical exercise — it is about creating a balanced and conscious life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="why-choose-visual"
          >
            <div className="experience-badge">
              <span className="years">5+</span>
              <span className="text">Years of Experience</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Student Experiences</h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="testimonial-card"
            >
              <div className="testimonial-rating">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.name[0]}</div>
                <span className="author-name">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta-content"
        >
          <h2>Begin Your Journey</h2>
          <p>Start your journey toward better health and inner peace.</p>
          <p className="cta-tagline">Join Khushyog today</p>
          <button 
            onClick={() => handleWhatsAppRedirect('trial')}
            className="btn btn-primary btn-large"
          >
            Book Your Trial Class – ₹200
          </button>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;