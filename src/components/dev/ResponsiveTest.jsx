import React, { useState, useEffect } from 'react';

const ResponsiveTest = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white text-xs p-2 rounded shadow-lg">
      <div>Screen: {windowSize.width}px × {windowSize.height}px</div>
      <div className="text-gray-400">
        {windowSize.width < 768 ? '📱 Mobile' : 
         windowSize.width < 1024 ? '📟 Tablet' : '💻 Desktop'}
      </div>
    </div>
  );
};

export default ResponsiveTest;