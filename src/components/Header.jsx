// components/Header.jsx
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle window resize to close mobile menu on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]); // Add isOpen as dependency

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/offline-yoga', label: 'Offline Yoga' },
    { path: '/online-yoga', label: 'Online Yoga' },
    { path: '/teacher-training', label: 'Teacher Training' },
    { path: '/meditation', label: 'Meditation' },
    { path: '/theta-healing', label: 'Theta Healing' },
    { path: '/pranic-healing', label: 'Pranic Healing' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
    
  ];

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      x: '100%',
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="nav-container">
        <Link to="/" className="logo">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="logo-wrapper"
          >
            <img src="/images/logo.jpeg" alt="Khushyog Logo" className="logo-image" />
            <span className="logo-text">Khushyog</span>
            <motion.span 
              className="logo-dot"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >•</motion.span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-menu-desktop">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
              >
                <span className="nav-label">{item.label}</span>
                {location.pathname === item.path && (
                  <motion.span 
                    className="active-indicator"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle - Only visible on mobile */}
        <motion.button 
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.button>

        {/* Mobile Menu Overlay - Only rendered when isOpen is true */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div 
                className="menu-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div 
                className="nav-menu-mobile"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="mobile-menu-header">
                  <img src="/images/logo.jpeg" alt="Khushyog Logo" className="mobile-logo" />
                  <span className="mobile-logo-text">Khushyog</span>
                  <button 
                    className="mobile-close"
                    onClick={() => setIsOpen(false)}
                  >
                    ✕
                  </button>
                </div>
                <ul className="mobile-nav-items">
                  {navItems.map((item) => (
                    <motion.li 
                      key={item.path}
                      variants={menuItemVariants}
                    >
                      <Link 
                        to={item.path} 
                        className={location.pathname === item.path ? 'active' : ''}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Header;