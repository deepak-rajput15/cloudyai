import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Expand cursor on clickable elements
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('service-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      mixBlendMode: 'difference'
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      scale: 1,
      height: 80,
      width: 80,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255,255,255,0.4)',
      mixBlendMode: 'normal'
    }
  };

  return (
    <>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 250, 
          mass: 0.2 
        }}
      />
      <div 
        className="cursor-dot" 
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px`,
          opacity: isHovering ? 0 : 1
        }} 
      />
    </>
  );
};

export default CustomCursor;
