import Link from 'next/link';
import CTASub from './cta-sub';

const CTAMain = () => {
  return (
    <div className="div-center font-public mb-12 text-center">
      <Link
        href="/"
        className="block nav-button bg-hero-button w-max text-white lg-bold mb-4"
      >
        Start Using Connect
      </Link>
      <CTASub />
    </div>
  );
};

export default CTAMain;
