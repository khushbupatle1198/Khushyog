import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import AdvertisementBreak from './components/AdvertisementBreak';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import OfflineYoga from './pages/OfflineYoga';
import OnlineYoga from './pages/OnlineYoga';
import TeacherTraining from './pages/TeacherTraining';
import Meditation from './pages/Meditation';
import ThetaHealing from './pages/ThetaHealing';
import PranicHealing from './pages/PranicHealing';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import PersonalYoga from './pages/PersonalYoga';
import RetreatDharamshala from './pages/RetreatDharamshala';

// Wrapper component to handle YouTube-style ad breaks
const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showAdPopup, setShowAdPopup] = useState(false);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [returnPath, setReturnPath] = useState('/');
  const [isFirstAd, setIsFirstAd] = useState(true); // Track first ad

  // Advertisement images
  const adImages = [
    { id: 1, src: '/images/ads/ads (1).jpeg', alt: 'Advertisement 1' },
    { id: 2, src: '/images/ads/ads (2).jpeg', alt: 'Advertisement 2' },
    { id: 3, src: '/images/ads/ads (3).jpeg', alt: 'Advertisement 3' }
  ];

  // Function to show ad immediately
  const showAd = () => {
    console.log("Showing ad...");
    setReturnPath(location.pathname);
    setCurrentAdIndex((prev) => (prev + 1) % adImages.length);
    setShowAdPopup(true);
  };

  // Function to schedule next ad with different timings
  const scheduleNextAd = () => {
    const lastAdTime = localStorage.getItem('lastAdTime');
    const currentTime = Date.now();
    
    // TIMING CONFIGURATION:
    // First ad: 30 seconds (30000 ms)
    // Subsequent ads: 3 minutes (180000 ms)
    
    let timeToWait = 0;
    
    if (isFirstAd) {
      // First ad - show after 30 seconds
      timeToWait = 30000; // 30 seconds
      console.log("FIRST AD: Will show in 30 seconds");
    } else {
      // Next ads - show after 3 minutes
      timeToWait = 180000; // 3 minutes (180000 ms)
      console.log("NEXT AD: Will show in 3 minutes");
    }
    
    // Check if we need to show ad immediately or wait
    if (!lastAdTime) {
      // No previous ad, schedule with configured time
      console.log(`Scheduling ${isFirstAd ? 'first' : 'next'} ad in ${timeToWait / 1000} seconds`);
      const timer = setTimeout(() => {
        console.log("Timer triggered - showing ad now!");
        if (location.pathname !== '/ad-break' && !showAdPopup) {
          setIsFirstAd(false); // After first ad, mark as not first
          showAd();
        }
      }, timeToWait);
      return () => clearTimeout(timer);
    } else {
      // Check time since last ad
      const timeSinceLastAd = currentTime - parseInt(lastAdTime);
      const remainingTime = timeToWait - timeSinceLastAd;
      
      if (remainingTime <= 0) {
        // Time has passed, show ad immediately
        console.log("Time already passed - showing ad now!");
        if (location.pathname !== '/ad-break' && !showAdPopup) {
          setIsFirstAd(false);
          showAd();
        }
        return;
      } else {
        // Schedule remaining time
        console.log(`Next ad in ${remainingTime / 1000} seconds`);
        const timer = setTimeout(() => {
          if (location.pathname !== '/ad-break' && !showAdPopup) {
            setIsFirstAd(false);
            showAd();
          }
        }, remainingTime);
        return () => clearTimeout(timer);
      }
    }
  };

  // Schedule first ad when page loads
  useEffect(() => {
    console.log("AppContent mounted - scheduling first ad in 30 seconds");
    const cleanup = scheduleNextAd();
    return cleanup;
  }, []);

  // Schedule next ad when returning to content after ad closes
  useEffect(() => {
    if (!showAdPopup && location.pathname !== '/ad-break') {
      console.log("Returned to content - scheduling next ad");
      const cleanup = scheduleNextAd();
      return cleanup;
    }
  }, [showAdPopup, location.pathname]);

  // Function to handle ad close
  const handleAdClose = () => {
    console.log("Ad closed by user or auto");
    setShowAdPopup(false);
    // Mark that user watched/skipped this ad
    localStorage.setItem('lastAdTime', Date.now().toString());
    // Navigate back to original page
    navigate(returnPath);
  };

  // If popup is showing, render ad
  if (showAdPopup) {
    console.log("Rendering ad popup");
    return (
      <AdvertisementBreak 
        adImages={adImages}
        currentAdIndex={currentAdIndex}
        onClose={handleAdClose}
      />
    );
  }

  // Otherwise render normal app content
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offline-yoga" element={<OfflineYoga />} />
        <Route path="/online-yoga" element={<OnlineYoga />} />
        <Route path="/personal-yoga" element={<PersonalYoga />} />
        <Route path="/teacher-training" element={<TeacherTraining />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/theta-healing" element={<ThetaHealing />} />
        <Route path="/pranic-healing" element={<PranicHealing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/retreat-dharamshala" element={<RetreatDharamshala />} />
      </Routes>
    </>
  );
};

// Main App component
function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="app">
        <Header scrolled={scrolled} />
        <main className="main-content">
          <AnimatePresence mode="wait">
            <AppContent />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;