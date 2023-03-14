import Image from 'next/image';
import onboard from '../public/icons/onboarding.svg';
import notallowed from '../public/icons/not-allowed.svg';
import document from '../public/icons/documentation.svg';
import verify from '../public/icons/verification.svg';
import { useEffect, useRef } from 'react';
import useRevealSection from './hooks/use-reveal-section';
import { useAnimation, motion } from 'framer-motion';

const containerVariant = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const childVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Benefits = () => {
  const ref = useRef();
  const { display } = useRevealSection(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (display) {
      animation.start('visible');
    }

    if (!display) {
      animation.start('hidden');
    }
  }, [display, animation]);

  return (
    <section className={`mb-40`}>
      <h4 className="h4">THE BENEFITS OF OUR CONNECT INFRASTRUCTURE</h4>
      <motion.div
        animate={animation}
        ref={ref}
        variants={containerVariant}
        className="px-40 grid-custom"
      >
        <motion.div
          variants={childVariant}
          className="benefit-container bg-benefit-1 px-10"
        >
          <p className="benefit-p-main text-benefits-main-1">
            Generate best loan offers
          </p>
          <p className="benefit-p-sub">
            Based on financial details that have been acquired, you can generate
            the most suitable offers (loans) for customers
          </p>
          <Image src={onboard} alt="onboard" className="div-center" />
        </motion.div>
        <motion.div
          variants={childVariant}
          className="benefit-container bg-benefit-2"
        >
          <p className="benefit-p-main text-benefits-main-2">
            Financial History Check
          </p>
          <p className="benefit-p-sub">
            Our kYC process helps verifies that customers are who they claim
            they are. This way, we can help you detect fraud and cybercrimes
          </p>
          <Image src={notallowed} alt="not-allowed" className="div-center" />
        </motion.div>
        <motion.div
          variants={childVariant}
          className="benefit-container bg-benefit-3"
        >
          <p className="benefit-p-main text-benefits-main-3">
            Better User Experience
          </p>
          <p className="benefit-p-sub">
            Make customers aware that failed transactions and ineligibility
            reports are due to low balances and income
          </p>
          <Image src={document} alt="documentation" className="div-center" />
        </motion.div>
        <motion.div
          variants={childVariant}
          className="benefit-container bg-benefit-4"
        >
          <p className="benefit-p-main text-white">Protect Your Business</p>
          <p className="benefit-sub-last text-benefit-sub-lite">
            Increase your financial security measures and protect your business
            from possible bad actors
          </p>
          <Image src={verify} alt="verification" className="div-center" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
