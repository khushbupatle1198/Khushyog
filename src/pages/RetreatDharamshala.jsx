import { motion } from 'framer-motion';
import './RetreatDharamshala.css';

const RetreatDharamshala = () => {
  const phoneNumber = "918999639059"; // +91 8999639059

  const handleWhatsAppRedirect = (type = 'retreat') => {
    let message = "";

    if (type === 'retreat') {
      message = `Hello Khushyog! 👋
I'm interested in the Yoga & Wellness Retreat in Dharamshala.
Please share more details about the retreat schedule, accommodation, and availability.`;
    } else if (type === 'details') {
      message = `Hello Khushyog! 👋
I'd like to know more details about the Yoga & Wellness Retreat in Dharamshala.
Please share the itinerary, pricing, and what's included in the retreat package.`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const retreatHighlights = [
    {
      icon: '🧘‍♀️',
      title: 'Daily Yoga Practices',
      desc: 'Morning and evening sessions suitable for all levels'
    },
    {
      icon: '🌿',
      title: 'Guided Meditation',
      desc: 'Mindfulness and breathwork in serene settings'
    },
    {
      icon: '🏔️',
      title: 'Nature Connection',
      desc: 'Walks and reflections amidst the Dhauladhar ranges'
    },
    {
      icon: '🥗',
      title: 'Wholesome Meals',
      desc: 'Nourishing, sattvic vegetarian cuisine'
    },
    {
      icon: '💆‍♀️',
      title: 'Healing Sessions',
      desc: 'Opportunities for personalized energy work'
    },
    {
      icon: '📿',
      title: 'Workshops',
      desc: 'Learn about yogic philosophy and lifestyle'
    }
  ];

  const itinerary = [
    {
      day: 'Day 1: Arrival & Grounding',
      activities: [
        'Check-in and settle into your accommodation',
        'Welcome circle and intention setting',
        'Gentle evening yoga session',
        'Group dinner under the stars'
      ]
    },
    {
      day: 'Day 2: Awakening & Asanas',
      activities: [
        'Sunrise yoga and pranayama',
        'Guided meditation overlooking the valley',
        'Workshop on the foundations of Hatha Yoga',
        'Evening restorative yoga & sound healing'
      ]
    },
    {
      day: 'Day 3: Inner Journey',
      activities: [
        'Morning silent walk and nature meditation',
        'Yoga Nidra for deep relaxation',
        'Workshop on the Chakras and energy body',
        'Evening chanting and kirtan'
      ]
    },
    {
      day: 'Day 4: Integration & Celebration',
      activities: [
        'Final morning practice and reflection',
        'Closing circle and sharing',
        'Check-out with a renewed sense of peace'
      ]
    }
  ];

  const whatsIncluded = [
    'Accommodation in a peaceful retreat center',
    'All vegetarian meals (breakfast, lunch, dinner)',
    'Two yoga/meditation sessions daily',
    'One workshop on yogic philosophy',
    'Use of retreat facilities and common areas',
    'Guided nature walk',
    'Welcome kit and retreat materials'
  ];

  const whatsNotIncluded = [
    'Travel to/from Dharamshala',
    'Personal expenses and additional spa treatments',
    'Travel insurance'
  ];

  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="retreat-dharamshala"
    >
      {/* Hero Section */}
      <section className="retreat-hero">
        <div className="retreat-hero-overlay"></div>
        <div className="retreat-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-badge"
          >
            🏔️ Your Sanctuary in the Himalayas
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Yoga & Wellness Retreat
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dharamshala
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-description"
          >
            A peaceful retreat in Dharamshala to slow down, heal, and reconnect with yourself 
            through yoga, meditation, and nature.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-buttons"
          >
            <button 
              onClick={() => handleWhatsAppRedirect('retreat')}
              className="btn btn-primary btn-large"
            >
              Reserve Your Spot
            </button>
            <button 
              onClick={() => handleWhatsAppRedirect('details')}
              className="btn btn-outline btn-large"
            >
              Request Details
            </button>
          </motion.div>
        </div>
      </section>

      {/* Retreat Highlights */}
      <section className="highlights-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Retreat Highlights</h2>
          <p className="section-subtitle">What makes this journey special</p>
        </motion.div>

        <div className="highlights-grid">
          {retreatHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="highlight-card"
            >
              <div className="highlight-icon">{highlight.icon}</div>
              <h3>{highlight.title}</h3>
              <p>{highlight.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="itinerary-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Your Retreat Journey</h2>
          <p className="section-subtitle">A typical 4-day, 3-night experience</p>
        </motion.div>

        <div className="itinerary-timeline">
          {itinerary.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="timeline-item-retreat"
            >
              <div className="timeline-day">{item.day}</div>
              <div className="timeline-activities">
                <ul>
                  {item.activities.map((activity, i) => (
                    <li key={i}>
                      <span className="activity-bullet">✦</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What's Included Section */}
      <section className="included-section">
        <div className="included-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="included-content"
          >
            <h2 className="section-title">What's Included</h2>
            <ul className="included-list">
              {whatsIncluded.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="checkmark">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="not-included-content"
          >
            <h2 className="section-title">What's Not Included</h2>
            <ul className="not-included-list">
              {whatsNotIncluded.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="crossmark">✕</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="retreat-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="retreat-cta-content"
        >
          <h2>Ready to Reconnect with Yourself?</h2>
          <p>Join us in the serene mountains of Dharamshala for a transformative experience.</p>
          <div className="cta-buttons">
            <button 
              onClick={() => handleWhatsAppRedirect('retreat')}
              className="btn btn-primary btn-large"
            >
              Book Your Retreat
            </button>
            <button 
              onClick={() => handleWhatsAppRedirect('details')}
              className="btn btn-outline btn-large"
            >
              Ask a Question
            </button>
          </div>
          <p className="cta-note">✨ Limited spots available. Early booking is recommended. ✨</p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default RetreatDharamshala;