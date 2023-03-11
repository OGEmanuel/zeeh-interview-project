import Image from 'next/image';
import cordial from '../public/images/cordialexchange.png';
import credley from '../public/images/credley.png';
import daxlinks from '../public/images/daxlinks.png';
import tomx from '../public/images/tomxcredit.png';

const Partners = () => {
  return (
    <section className="flex-items-center px-24 gap-8 mb-20">
      <p className="font-bold text-[1.25rem] font-mont text-partners-color">
        Trusted by
      </p>
      <div className="flex-items-center gap-20">
        <Image src={daxlinks} alt="daxlinks logo" />
        <Image src={tomx} alt="tomxcredit logo" />
        <Image src={credley} alt="credley logo" />
        <Image src={cordial} alt="cordial logo" />
      </div>
    </section>
  );
};

export default Partners;
