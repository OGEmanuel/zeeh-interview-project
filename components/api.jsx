import Image from 'next/image';
import Link from 'next/link';
import CTASub from './UI/cta-sub';
import arrow from '../public/icons/arrow-forward.svg';
import api from '../public/images/api-sample.png';
import preview from '../public/images/preview.svg';

const API = () => {
  return (
    <section>
      <h3 className="text-center capitalize mb-10 font-black text-[2.6875rem] font-public text-blue-feature-card">
        developer-friendly aPI
      </h3>
      <div className="bg-bg-final-section">
        <div className="mx-10 bg-final-section rounded-custom-2x relative flex pt-20 px-16 mb-56">
          <div className="text-white font-mont">
            <p className="font-public font-black text-[2.3125rem] w-[45%] mb-36">
              For Developer, by Developer
            </p>
            <p className="font-bold text-sm text-final-section-sub w-[60%] leading-[30px] mb-10">
              Providing a personalized experience for users. through
              Interoperable and customizable Products that can work seamlessly ,
              enabling smooth integration and data exchange.
            </p>
            <Link href="/" className="flex-items-center gap-2 mb-16">
              <p>Explore Our Docs</p>
              <Image src={arrow} alt="arrow" />
            </Link>
          </div>
          <Image src={api} alt="api-sample" className="h-max" />
          <Image
            src={preview}
            alt="preview"
            className="absolute top-0 right-[2.7%]"
          />
        </div>
        <h2 className="w-[50%] mx-auto text-center font-black text-[4.1875rem] capitalize text-blue-feature-card font-public mb-10">
          infra that just works
        </h2>
        <div className="div-center flex-items-center gap-4 pb-40">
          <Link
            href="/"
            className="nav-button bg-logo text-white text-lg font-bold font-public"
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
