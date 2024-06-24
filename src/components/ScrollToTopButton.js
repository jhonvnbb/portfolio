import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`scroll-to-top ${visible ? 'show' : ''}`}>
      <HashLink smooth to="#home">
        <button>↑</button>
      </HashLink>
    </div>
  );
};
