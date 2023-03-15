import { useRef, useEffect, useState } from 'react';
import NavBar from './navbar';
import HeroSvg from './svg/hero-svg';
import CTAMain from './UI/cta-main';

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
    const refs = ref.current;
    const partnersObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${height}px`,
    });
    if (refs) partnersObserver.observe(refs);
    return () => {
      if (refs) partnersObserver.unobserve(refs);
    };
  }, [ref]);
  return (
    <section ref={ref} className="bg-hero mb-5 md:mb-10">
      <NavBar sticky={sticky} onGetNavHeight={getNavHeight} />
      <div className="pt-5 xl:pt-20 pb-0 md:pb-20 xl:pb-56 text-center max-w-[30rem] xl:max-w-none mx-auto px-5">
        <div className="font-public">
          <p className="text-gray-secondary md:text-lg mb-2.5 md:mb-auto">
            CONNECT
          </p>
          <h1 className="text-4xl leading-[1] md:leading-normal md:text-5xl xl:text-[4.1875rem] font-black xl:w-[50%] mx-auto capitalize mb-4 text-blue-feature-card">
            Connect financial data Across Banks
          </h1>
        </div>
        <p className="font-mont lg-bold text-header-body xl:w-[56%] mx-auto mb-6 md:mb-10">
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
