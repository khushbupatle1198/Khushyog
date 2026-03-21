// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

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
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;