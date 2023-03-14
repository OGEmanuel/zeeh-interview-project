import { useState, useEffect } from 'react';

const useRevealSection = ref => {
  const [display, setDisplay] = useState(false);
  const revealSection = entries => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.05,
    });
    if (ref.current) sectionObserver.observe(ref.current);
    return () => {
      if (ref.current) sectionObserver.unobserve(ref.current);
    };
  }, [ref]);
  return { display };
};

export default useRevealSection;
