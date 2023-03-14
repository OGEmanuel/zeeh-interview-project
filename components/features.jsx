import wallet from '../public/icons/wallet.svg';
import transaction from '../public/icons/transaction.svg';
import dollarCard from '../public/icons/dollar-card.svg';
import dollarCircle from '../public/icons/dollar-circle.svg';
import Image from 'next/image';
import CardBlack from './UI/card-black';
import CardBlue from './UI/card-blue';
import { useRef, useEffect } from 'react';
import useRevealSection from './hooks/use-reveal-section';
import { motion, useAnimation } from 'framer-motion';

const imgVariants = {
  hover: { scale: 1.2, rotate: 90 },
  tap: { scale: 0.8, rotate: -90 },
};

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

const Features = () => {
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
    <section ref={ref} className={`px-10 mb-20 xl:mb-40`}>
      <h4 className="h4">THE THINGS YOU GET WITH OUR CONNECT INFRASTRUCTURE</h4>
      <motion.div
        animate={animation}
        variants={containerVariant}
        className="font-mont grid-custom"
      >
        <motion.div variants={childVariant}>
          <CardBlack>
            <p className="feature-p-main">Account Information</p>
            <motion.div
              variants={imgVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Image
                src={wallet}
                alt="wallet"
                className="feature-img w-[7rem]"
              />
            </motion.div>
            <p className="feature-p-sub">
              Zeeh gives businesses direct interaction with their client&rsquo;s
              banks, making the process of saving and investment anywhere
              seamless for their customers.
            </p>
          </CardBlack>
        </motion.div>
        <motion.div variants={childVariant}>
          <CardBlue>
            <p className="feature-p-main">Transaction History</p>
            <motion.div
              variants={imgVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Image
                src={transaction}
                alt="transaction"
                className="feature-img w-[7rem]"
              />
            </motion.div>
            <p className="feature-p-sub">
              Copy unique app link and send to customers or integrate on the
              platform for customers to click
            </p>
          </CardBlue>
        </motion.div>
        <motion.div variants={childVariant}>
          <CardBlue>
            <p className="feature-p-main">1 year Statement Pages</p>
            <motion.div
              variants={imgVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Image
                src={dollarCard}
                alt="dollar card"
                className="feature-img w-[5rem]"
              />
            </motion.div>
            <p className="feature-p-sub">
              Make customers aware that failed transactions and ineligibility
              reports are due to low balances and income
            </p>
          </CardBlue>
        </motion.div>
        <motion.div variants={childVariant}>
          <CardBlack>
            <p className="feature-p-main">Income Values</p>
            <motion.div
              variants={imgVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Image
                src={dollarCircle}
                alt="dollar circle"
                className="feature-img w-[7rem]"
              />
            </motion.div>
            <p className="feature-p-sub">
              Based on financial details that have been acquired, you can
              generate the most suitable offer (loans) to customers
            </p>
          </CardBlack>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;
