import { motion } from 'framer-motion';
import Link from 'next/link';
import CTASub from './cta-sub';

const variants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    tranition: { type: 'spring', stiffness: 120 },
  },
};
const CTAMain = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="div-center font-public md:mb-12 text-center"
    >
      <Link
        href="/"
        className="block nav-button bg-hero-button w-max text-white lg-bold mb-4 hover:scale-110 transition-all mx-auto"
      >
        Start Using Connect
      </Link>
      <CTASub />
    </motion.div>
  );
};

export default CTAMain;
