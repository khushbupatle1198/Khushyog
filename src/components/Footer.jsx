// components/Footer.jsx
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-info">
            <div className="footer-logo">
              <img src="/images/logo.jpeg" alt="Khushyog Logo" className="footer-logo-image" />
              <h3>Khushyog</h3>
            </div>
            <p>Yoga, Meditation & Healing for a Balanced Life</p>
            <div className="social-links">
              <a href="https://instagram.com/khushyog" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/offline-yoga">Offline Yoga</Link></li>
              <li><Link to="/online-yoga">Online Yoga</Link></li>
              <li><Link to="/teacher-training">Teacher Training</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Healing</h4>
            <ul>
              <li><Link to="/meditation">Meditation</Link></li>
              <li><Link to="/theta-healing">Theta Healing</Link></li>
              <li><Link to="/pranic-healing">Pranic Healing</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>
              <span className="contact-icon">📍</span>
              Nagpur, Maharashtra
            </p>
            <p>
              <span className="contact-icon">📞</span>
              <a href="tel:+918999639059">+91 8999639059</a>
            </p>
             <p>
              <span className="contact-icon">📞</span>
              <a href="tel:+917758-048373">+91 7758-048373</a>
            </p>
            <p>
              <span className="contact-icon">📧</span>
              <a href="mailto:khushyalisingh10@gmail.com">khushyalisingh10@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Khushyog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;