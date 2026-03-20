// components/BookingModal.jsx - This component is no longer needed but keeping for reference
// You can delete this file or keep it for future use

import { useEffect } from 'react';

// This component now just redirects to WhatsApp
const BookingModal = ({ isOpen, onClose, classType = 'trial', price = '200' }) => {
  const phoneNumber = "918999639059"; // +91 8999639059

  useEffect(() => {
    if (isOpen) {
      // Create message based on class type
      let message = "";
      
      switch(classType) {
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

      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');
      
      // Close the modal (if it was somehow opened)
      onClose();
    }
  }, [isOpen, onClose, classType, price]);

  // This component doesn't render anything
  return null;
};

export default BookingModal;