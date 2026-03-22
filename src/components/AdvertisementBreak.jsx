import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './AdvertisementBreak.css';

const AdvertisementBreak = ({ adImages, currentAdIndex, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const currentAd = adImages[currentAdIndex];

  console.log("AdBreak rendered - Ad index:", currentAdIndex);

  // Auto close after 10 seconds
  useEffect(() => {
    console.log("Ad timer started - will close in 10 seconds");
    const timer = setTimeout(() => {
      console.log("Auto closing ad after 10 seconds");
      handleClose();
    }, 10000); // 10 seconds ad duration

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    console.log("Closing ad...");
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="advertisement-page">
      <div className="ad-popup-overlay">
        <motion.div
          className="ad-popup-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Skip Button */}
          <button className="ad-skip-btn" onClick={handleClose}>
            ✕ Skip Ad
          </button>

          {/* Ad Badge */}
          <div className="ad-badge">
            Advertisement
          </div>

          {/* Full Image Display */}
          <div className="ad-image-container-full">
            <img 
              src={currentAd.src} 
              alt={currentAd.alt}
              className="ad-image-full"
              onError={(e) => {
                console.log("Image failed to load:", currentAd.src);
                e.target.src = 'https://via.placeholder.com/800x1000?text=Advertisement';
              }}
              onLoad={() => console.log("Image loaded successfully:", currentAd.src)}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvertisementBreak;