// pages/Workshops.jsx - Simplified with no filters or zoom icons
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Workshops.css';

const Workshops = () => {
  const phoneNumber = "918999639059";
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleWhatsAppRedirect = () => {
    let message = `Hello Khushyog! 👋

I'm interested in booking a Workshop or Wellness Session for my organization/community.

Organization/Institution Name: 
Type of Organization: (Corporate/College/NGO/Other)
Expected Participants: 
Preferred Date: 
Specific Focus Areas: (Yoga/Meditation/Stress Relief/Healing/Wellness)
Additional Requirements: 

Please share more details about your offerings and availability.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  // Workshop locations list
  const workshopLocations = [
    {
      id: 1,
      name: "Government Medical College (GMC), Nagpur",
      description: "Comprehensive wellness sessions for medical students and faculty focusing on stress management and holistic health.",
      participants: "200+",
      date: "Multiple Sessions"
    },
    {
      id: 2,
      name: "Indira Gandhi Government Medical College (IGGMC)",
      description: "Specialized yoga and meditation workshops for healthcare professionals emphasizing self-care and burnout prevention.",
      participants: "150+",
      date: "Regular Sessions"
    },
    {
      id: 3,
      name: "Priyadarshini College, Nagpur",
      description: "Engaging wellness workshops combining modern yoga practices with traditional wisdom for student wellbeing.",
      participants: "300+",
      date: "2023-2024"
    },
    {
      id: 4,
      name: "DNC College, Nagpur",
      description: "Interactive sessions focused on building resilience, concentration, and inner peace among students.",
      participants: "180+",
      date: "2023"
    },
    {
      id: 5,
      name: "Fashion Institutes, Nagpur",
      description: "Creative wellness sessions integrating movement, mindfulness, and artistic expression.",
      participants: "120+",
      date: "Multiple Sessions"
    },
    {
      id: 6,
      name: "Beauty Pageant Wellness Sessions",
      description: "Empowering sessions focusing on confidence building, stress management, and holistic preparation.",
      participants: "50+",
      date: "2023-2024"
    },
    {
      id: 7,
      name: "NGOs & Community Organizations",
      description: "Heart-centered wellness initiatives bringing yoga and healing to underserved communities.",
      participants: "500+",
      date: "Ongoing"
    },
    {
      id: 8,
      name: "Old Age Homes",
      description: "Gentle yoga and meditation sessions promoting mobility, peace, and emotional wellbeing for elderly residents.",
      participants: "100+",
      date: "Regular Visits"
    },
    {
      id: 9,
      name: "Pench Wellness Retreat Sessions",
      description: "Immersive wellness experiences in nature combining yoga, meditation, and healing practices.",
      participants: "80+",
      date: "Seasonal Retreats"
    }
  ];

  // All workshop images from gallery (collage 1-10)
  const workshopImages = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: `/images/gallery/collage (${i + 1}).jpeg`,
    alt: `Workshop Session ${i + 1}`
  }));

  const focusAreas = [
    {
      icon: "🧘",
      title: "Yoga & Movement Therapy",
      desc: "Therapeutic yoga practices tailored to specific needs and conditions"
    },
    {
      icon: "😌",
      title: "Stress Relief & Mental Wellness",
      desc: "Practical techniques for managing stress and cultivating mental peace"
    },
    {
      icon: "🌬️",
      title: "Breathwork (Pranayama)",
      desc: "Conscious breathing practices for energy regulation and calm"
    },
    {
      icon: "🧠",
      title: "Meditation & Mindfulness",
      desc: "Guided practices to develop present-moment awareness"
    },
    {
      icon: "💖",
      title: "Emotional Healing & Energy Work",
      desc: "Deep healing practices for emotional release and energetic balance"
    },
    {
      icon: "📚",
      title: "Lifestyle & Awareness Guidance",
      desc: "Holistic lifestyle education for sustainable wellbeing"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="workshops"
    >
      {/* Hero Section */}
      <section className="workshops-hero">
        <div className="workshops-hero-pattern"></div>
        <div className="workshops-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            🌸 Beyond the Mat
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Workshops & Wellness Sessions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-description"
          >
            Extending the power of yoga beyond regular classes — nurturing mental well-being, 
            emotional healing, and inner balance in institutions, corporates, and communities.
          </motion.p>
        </div>
      </section>

      {/* Workshop Locations List Section */}
      <section className="locations-list-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Where We've Been</h2>
          <p className="section-subtitle">
            Grateful to have facilitated sessions at these esteemed institutions and communities
          </p>
        </motion.div>

        <div className="locations-list">
          {workshopLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="location-list-item"
            >
              <div className="location-details">
                <h3>{location.name}</h3>
                <p>{location.description}</p>
                <div className="location-meta">
                  <span className="meta-badge">👥 {location.participants} Participants</span>
                  <span className="meta-badge">📅 {location.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="focus-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Our Focus Areas</h2>
          <p className="section-subtitle">
            Each session is designed with intention, combining ancient wisdom with modern needs
          </p>
        </motion.div>

        <div className="focus-grid">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="focus-card"
            >
              <div className="focus-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section - All Workshop Images */}
      <section className="gallery-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Workshop Moments</h2>
          <p className="section-subtitle">
            Capturing the essence of wellness and transformation
          </p>
        </motion.div>

        {/* Simple Images Grid */}
        <div className="gallery-grid-workshop">
          {workshopImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="gallery-item"
              onClick={() => setLightboxImage({ src: image.src, alt: image.alt })}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="vision-content"
        >
          <div className="vision-icon">🌈</div>
          <h2>Our Vision</h2>
          <p>
            To spread the essence of yoga, awareness, and healing to every space — 
            helping individuals feel calm, connected, and empowered within themselves.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="workshops-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="workshops-cta-content"
        >
          <h2>Bring Wellness to Your Organization</h2>
          <p>We would love to collaborate and design a customized wellness session for your team or community.</p>
          
          <div className="cta-features">
            <div className="cta-feature">
              <span>✨</span>
              <span>Customized Programs</span>
            </div>
            <div className="cta-feature">
              <span>🎯</span>
              <span>Needs-Based Design</span>
            </div>
            <div className="cta-feature">
              <span>💫</span>
              <span>Expert Facilitation</span>
            </div>
            <div className="cta-feature">
              <span>🌿</span>
              <span>Holistic Approach</span>
            </div>
          </div>
          
          <button 
            onClick={handleWhatsAppRedirect}
            className="btn btn-primary btn-large"
          >
            📩 Book a Workshop
          </button>
          <p className="cta-note">
            Contact us to design a personalized wellness experience for your organization
          </p>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>×</button>
            <img src={lightboxImage.src} alt={lightboxImage.alt} />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Workshops;