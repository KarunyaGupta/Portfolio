import React, { useEffect } from 'react';
import '../CSS/Snackbar.css';

const Snackbar = ({ open, message, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  return (
    <div className={`snackbar${open ? ' show' : ''}`}>{message}</div>
  );
};

export default Snackbar;
