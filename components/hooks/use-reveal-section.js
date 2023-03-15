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
    const refs = ref.current;
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0,
    });
    if (refs) sectionObserver.observe(refs);
    return () => {
      if (refs) sectionObserver.unobserve(refs);
    };
  }, [ref]);
  return { display };
};

export default useRevealSection;
