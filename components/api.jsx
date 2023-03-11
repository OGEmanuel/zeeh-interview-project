import Image from 'next/image';
import Link from 'next/link';
import CTASub from './UI/cta-sub';
import arrow from '../public/icons/arrow-forward.svg';
import api from '../public/images/api-sample.png';
import preview from '../public/images/preview.svg';

const API = () => {
  return (
    <section>
      <h3>developer-friendly aPI</h3>
      <div>
        <div>
          <p>For Developer, by Developer</p>
          <p>
            Providing a personalized experience for users. through Interoperable
            and customizable Products that can work seamlessly , enabling smooth
            integration and data exchange.
          </p>
          <Link href="/">
            <p>Explore Our Docs</p>
            <Image src={arrow} alt="arrow" />
          </Link>
        </div>
        <Image src={api} alt="api-sample" />
        <Image src={preview} alt="preview" />
      </div>
      <h2>infra that just works</h2>
      <div>
        <Link href="/">Get Started</Link>
        <CTASub />
      </div>
    </section>
  );
};

export default API;
