// pages/TeacherTraining.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './TeacherTraining.css';

const TeacherTraining = () => {
  const phoneNumber = "918999639059"; // +91 8999639059

  const handleWhatsAppRedirect = () => {
    const message = `Hello Khushyog! 👋
I'm interested in the 200-Hour Yoga Teacher Training Course. 
Please share more details about the curriculum, schedule, and fees.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const curriculum = [
  { module: '1. Foundation of Yoga', topics: ['Philosophy & Awareness'] },
  { module: '2. Pranayama & Breathwork', topics: ['Breathing Techniques', 'Energy Control'] },
  { module: '3. Asana Practice & Alignment', topics: ['Postures', 'Correct Alignment', 'Safety'] },
  { module: '4. Mind & Emotional Healing', topics: ['Mental Balance', 'Stress Release', 'Emotional Awareness'] },
  { module: '5. Energy Work & Chakras', topics: ['Chakra System', 'Energy Flow', 'Balancing Techniques'] },
  { module: '6. Teaching Skills & Confidence', topics: ['Public Speaking', 'Confidence Building'] },
  { module: '7. Class Design & Sequencing', topics: ['Session Planning', 'Flow Creation'] },
  { module: '8. Yoga Anatomy & Physiology', topics: ['Body Structure', 'Muscles & Movement'] },
  { module: '9. Meditation & Mindfulness Practices', topics: ['Meditation Techniques', 'Mindfulness'] },
  { module: '10. Business & Brand Building', topics: ['Personal Branding', 'Client Handling', 'Marketing Basics'] },
  { module: '11. Ethics & Lifestyle of a Yoga Teacher', topics: ['Yogic Lifestyle', 'Professional Ethics'] },
  { module: '12. Final Assessment & Certification', topics: ['Evaluation', 'Certification Process'] }
];

  const features = [
    { icon: '📜', title: 'Certification', desc: 'Internationally recognized certificate' },
    { icon: '👥', title: 'Small Batches', desc: 'Personal attention & guidance' },
    { icon: '📚', title: 'Study Material', desc: 'Comprehensive course material' },
    { icon: '🎯', title: 'Practical Training', desc: 'Hands-on teaching experience' },
    { icon: '🧘', title: 'Personal Practice', desc: 'Deepen your own practice' },
    { icon: '💼', title: 'Placement Support', desc: 'Job assistance after course' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="teacher-training"
    >
      {/* Hero Section */}
      <section className="training-hero">
        <div className="training-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Yoga Teacher Training Course
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A deeper journey for those who want to learn yoga in depth and share it with others
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
              Enroll Now – Limited Seats
            </button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="overview-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overview-content"
          >
            <h2 className="section-title">About the Course</h2>
            <p>
              For those who wish to deepen their understanding of yoga and share it with others, 
              Khushyog offers a comprehensive Yoga Teacher Training Course.
            </p>
            <p>
              This program focuses on both the practice and philosophy of yoga, preparing you 
              to become a confident and knowledgeable yoga teacher.
            </p>
            <div className="course-highlights">
              <div className="highlight">
                <span className="highlight-number">200</span>
                <span className="highlight-label">Hour Course</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">8</span>
                <span className="highlight-label">Weeks Duration</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">24/7</span>
                <span className="highlight-label">Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overview-visual"
          >
            <div className="training-badge">
              <span>RYS 200</span>
              <small>Registered Yoga School</small>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Course Curriculum</h2>
          <p className="section-subtitle">Comprehensive training program</p>
        </motion.div>

        <div className="curriculum-grid">
          {curriculum.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="curriculum-card"
            >
              <h3>{module.module}</h3>
              <ul>
                {module.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="training-features">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">What You'll Get</h2>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="feature-card"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who Should Join */}
      <section className="who-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="who-content"
        >
          <h2 className="section-title">Who Should Join?</h2>
          <ul className="who-list">
            <li>✓ Aspiring yoga teachers</li>
            <li>✓ Yoga practitioners who want deeper knowledge</li>
            <li>✓ Anyone interested in authentic yogic learning</li>
            <li>✓ Those seeking personal transformation</li>
            <li>✓ Health & wellness professionals</li>
          </ul>
          <button 
            onClick={handleWhatsAppRedirect}
            className="btn btn-primary btn-large"
          >
            Enroll Now – Limited Seats
          </button>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default TeacherTraining;