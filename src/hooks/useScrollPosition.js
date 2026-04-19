import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to track scroll position and direction.
 * Returns { scrollY, scrollDirection } where scrollDirection is 'up' or 'down'.
 */
function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
    setScrollY(currentScrollY);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { scrollY, scrollDirection };
}

export default useScrollPosition;
