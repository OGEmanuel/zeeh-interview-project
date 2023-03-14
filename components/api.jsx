import Image from 'next/image';
import Link from 'next/link';
import CTASub from './UI/cta-sub';
import arrow from '../public/icons/arrow-forward.svg';
import api from '../public/images/api-sample.png';
import preview from '../public/images/preview.svg';
import { useRef } from 'react';
import useRevealSection from './hooks/use-reveal-section';

const API = () => {
  const ref = useRef();
  const { display } = useRevealSection(ref);
  return (
    <section
      ref={ref}
      className={`animate-in px-5 md:px-0 ${display ? '' : 'section-hidden'}`}
    >
      <h3 className="text-center capitalize mb-10 font-black text-[2.6875rem] font-public text-blue-feature-card">
        developer-friendly aPI
      </h3>
      <div className="bg-bg-final-section">
        <div className="bg-final-section rounded-custom-2x relative flex flex-col-reverse xl:flex-row pt-10 md:pt-20 px-7 md:px-16 mb-20 xl:mb-56 gap-10 xl:gap-0 max-w-[30rem] md:max-w-[40rem] xl:max-w-[70rem] mx-auto">
          <div className="text-white font-mont">
            <p className="font-public font-black text-2xl xl:text-[2.3125rem] 2xl:text-[3rem] 2xl:leading-[1] xl:w-[45%] mb-5 xl:mb-36">
              For Developer, by Developer
            </p>
            <p className="font-bold text-sm 2xl:text-base text-final-section-sub md:w-[60%] 2xl:w-[70%] leading-[20px] md:leading-[30px] mb-5 md:mb-10">
              Providing a personalized experience for users. through
              Interoperable and customizable Products that can work seamlessly ,
              enabling smooth integration and data exchange.
            </p>
            <Link href="/" className="flex-items-center gap-2 mb-10 md:mb-16">
              <p>Explore Our Docs</p>
              <Image src={arrow} alt="arrow" />
            </Link>
          </div>
          <Image src={api} alt="api-sample" className="h-max" />
          <Image
            src={preview}
            alt="preview"
            className="absolute w-[5rem] md:w-auto top-0 right-[2.7%]"
          />
        </div>
        <h2 className="w-[50%] mx-auto text-center font-black text-2xl md:text-4xl xl:text-[4.1875rem] capitalize text-blue-feature-card font-public mb-10 leading-[1.5]">
          infra that just works
        </h2>
        <div className="div-center w-max flex-items-center gap-4 pb-20 xl:pb-40 px-5 md:px-auto">
          <Link
            href="/"
            className="nav-button bg-logo text-white text-lg font-bold font-public hover:bg-white hover:bg-logo hover:text-transparent hover:bg-clip-text"
          >
            Get Started
          </Link>
          <CTASub />
        </div>
      </div>
    </section>
  );
};

export default API;
