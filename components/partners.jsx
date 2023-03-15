import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import cordial from '../public/images/cordialexchange.png';
import credley from '../public/images/credley.png';
import daxlinks from '../public/images/daxlinks.png';
import tomx from '../public/images/tomxcredit.png';
import useRevealSection from './hooks/use-reveal-section';

const Partners = () => {
  const ref = useRef();
  const { display } = useRevealSection(ref);
  return (
    <section
      ref={ref}
      className={`flex-items-center flex-wrap mx-auto md:w-[40rem] xl:w-max gap-8 mb-20 animate-in px-5 xl:px-20 ${
        display ? '' : 'section-hidden'
      }`}
    >
      <p className="font-bold text-[1.25rem] font-mont text-partners-color">
        Trusted by
      </p>
      <div className="flex-items-center flex-wrap gap-10 md:gap-20">
        <Image src={daxlinks} alt="daxlinks logo" />
        <Image src={tomx} alt="tomxcredit logo" />
        <Image src={credley} alt="credley logo" />
        <Image src={cordial} alt="cordial logo" />
      </div>
    </section>
  );
};

export default Partners;
