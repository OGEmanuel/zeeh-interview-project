import Link from 'next/link';
import NavBar from './navbar';
import HeroSvg from './svg/hero-svg';
import CTAMain from './UI/cta-main';

const Hero = () => {
  return (
    <section className="bg-hero mb-10">
      <NavBar />
      <div className="pt-20 pb-56 text-center">
        <div className="font-public">
          <p className="text-gray-secondary text-lg">CONNECT</p>
          <h1 className="text-[4.1875rem] font-black px-80 capitalize mb-4 text-blue-feature-card">
            Connect financial data Across Banks
          </h1>
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
