import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to track scroll position and direction.
 * Returns { scrollY, scrollDirection } where scrollDirection is 'up' or 'down'.
 */
function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollYRef.current ? 'down' : 'up');
      setScrollY(currentScrollY);
      lastScrollYRef.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollDirection };
}

export default useScrollPosition;
