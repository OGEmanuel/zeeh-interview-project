import { useRef, useEffect, useState } from 'react';
import NavBar from './navbar';
import HeroSvg from './svg/hero-svg';
import CTAMain from './UI/cta-main';
import { motion } from 'framer-motion';

const h1Variants = {
  hidden: {
    opacity: 1,
    fontSize: '2rem',
  },
  visible: {
    opacity: 1,
    fontSize: '4.1875rem',
  },
};

const Hero = () => {
  const ref = useRef();
  const [sticky, setSticky] = useState(false);
  const [height, setHeight] = useState(0);
  const getNavHeight = height => {
    setHeight(height);
  };

  const stickyNav = entries => {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    const partnersObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${height}px`,
    });
    if (ref.current) partnersObserver.observe(ref.current);
    return () => {
      if (ref.current) partnersObserver.unobserve(ref.current);
    };
  }, [ref]);
  return (
    <section ref={ref} className="bg-hero mb-10">
      <NavBar sticky={sticky} onGetNavHeight={getNavHeight} />
      <div className="pt-20 pb-56 text-center">
        <div className="font-public">
          <p className="text-gray-secondary text-lg">CONNECT</p>
          <motion.h1
            variants={h1Variants}
            initial="hidden"
            animate="visible"
            className="text-[4.1875rem] font-black px-80 capitalize mb-4 text-blue-feature-card"
          >
            Connect financial data Across Banks
          </motion.h1>
        </div>
        <p className="font-mont lg-bold text-header-body px-72 mb-10">
          With Zeeh&rsquo;s easy-to-use API endpoints, you can access
          holder&rsquo;s full name and other bio data including transactions and
          statements ranging from 1-12 months without writing a single line of
          code.
        </p>
        <CTAMain />
        <div className="div-center">
          <HeroSvg />
        </div>
      </div>
    </section>
  );
};

export default Hero;
