import { useEffect, useCallback } from 'react';

export const useScrollAnimation = () => {
  const handleScrollAnimation = useCallback(() => {
    const elements = document.querySelectorAll('.fade-in:not(.visible)');
    const windowHeight = window.innerHeight;

    elements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - 100) {
        // Stagger animations
        setTimeout(() => {
          element.classList.add('visible');
        }, index * 100);
      }
    });

    // Add shadow to header on scroll
    const header = document.querySelector('header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, []);

  useEffect(() => {
    // Initial animation check
    setTimeout(handleScrollAnimation, 300);
    
    // Add scroll event listener with debounce
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScrollAnimation();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [handleScrollAnimation]);
};