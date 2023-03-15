import { useEffect, useRef } from 'react';
import useRevealSection from './hooks/use-reveal-section';
import { useAnimation, motion } from 'framer-motion';

const containerVariant = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const childVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const How = () => {
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
    <section ref={ref} className={`mb-20 xl:mb-40`}>
      <h4 className="h4">HOW IT WORKS</h4>
      <motion.div
        animate={animation}
        variants={containerVariant}
        className="px-5 xl:px-20 font-mont font-bold text-center grid-custom"
      >
        <motion.div
          variants={childVariant}
          className="bg-how-bg-1 how-container"
        >
          <p className="how-main-p text-benefits-main-2">Create an app</p>
          <p className="how-sub-p text-how-sub-1">
            Create an app on the dashboard. During creation, select the product
            type; KYC in this case
          </p>
        </motion.div>
        <motion.div
          variants={childVariant}
          className="bg-benefits-main-3 how-container"
        >
          <p className="how-main-p text-white">integrate app link</p>
          <p className="how-sub-p text-card-p">
            Copy unique app link and send to customers or integrate on the
            platform for customers to click
          </p>
        </motion.div>
        <motion.div
          variants={childVariant}
          className="bg-how-bg-3 how-container"
        >
          <p className="how-main-p text-benefits-main-3">
            Get authentication from customers
          </p>
          <p className="how-sub-p text-header-body">
            Customers keys in correct bank details (for any bank at all in
            Nigeria)
          </p>
        </motion.div>
        <motion.div
          variants={childVariant}
          className="how-container shadow-2xl"
        >
          <p className="how-main-p text-benefits-main-3">confirm query</p>
          <p className="how-sub-p text-header-body">
            If successful, you will be notified by email about newly added
            customers
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default How;
