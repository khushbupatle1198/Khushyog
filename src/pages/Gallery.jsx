// pages/Gallery.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: '/images/gallery/yoga (1).jpeg' },
    { id: 2, src: '/images/gallery/yoga (2).jpeg' },
    { id: 3, src: '/images/gallery/yoga (3).jpeg' },
    { id: 4, src: '/images/gallery/yoga (4).jpeg' },
    { id: 5, src: '/images/gallery/yoga (5).jpeg' },
    { id: 6, src: '/images/gallery/yoga (6).jpeg' },
    { id: 7, src: '/images/gallery/yoga (7).jpeg' },
    { id: 8, src: '/images/gallery/yoga (8).jpeg' },
    { id: 9, src: '/images/gallery/yoga (9).jpeg' },
    { id: 10, src: '/images/gallery/yoga (10).jpeg' },
    { id: 11, src: '/images/gallery/yoga (11).jpeg' },
    { id: 12, src: '/images/gallery/yoga (12).jpeg' },
    { id: 13, src: '/images/gallery/collage (1).jpeg' },
    { id: 14, src: '/images/gallery/collage (2).jpeg' },
    { id: 15, src: '/images/gallery/collage (3).jpeg' },
    { id: 16, src: '/images/gallery/collage (4).jpeg' },
    { id: 17, src: '/images/gallery/collage (5).jpeg' },
    { id: 18, src: '/images/gallery/collage (6).jpeg' },
    { id: 19, src: '/images/gallery/collage (7).jpeg' },
    { id: 20, src: '/images/gallery/collage (8).jpeg' },
    { id: 21, src: '/images/gallery/collage (9).jpeg' },
    { id: 22, src: '/images/gallery/collage (10).jpeg' },
   
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="gallery"
    >
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A glimpse into the Khushyog community and practice spaces
          </motion.p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="gallery-grid-section">
        <div className="gallery-container">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <div className="gallery-image-wrapper">
                <img src={image.src} alt={`Gallery ${image.id}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={`Gallery ${selectedImage.id}`} />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Gallery;