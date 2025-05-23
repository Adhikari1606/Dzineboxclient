// src/components/Cursor.jsx
import React, { useState, useEffect, useRef } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
    ref={cursorRef}
    style={{
      position: 'fixed',
      width: '250px', // Increase size for a softer effect
      height: '250px', // Increase size for a softer effect
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(173, 216, 230, 0.3), transparent)', // Reduced opacity
      pointerEvents: 'none',
      transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
      zIndex: 0,
      filter: 'blur(10px)', // Add blur for smoother edges
    }}
  />
  );
};

export default Cursor;