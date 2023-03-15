import Link from 'next/link';
import Image from 'next/image';
import icon from '../../public/icons/nav-icon.svg';

const ULMobile = ({ checked }) => {
  return (
    <ul
      className={`flex items-center md:hidden flex-col gap-6 font-mont fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%] transition-nav ${
        checked ? 'w-max opacity-1 z-30' : 'opacity-0 w-0 -z-30'
      }`}
    >
      <li className="li-nav">
        <Link href="/">Business</Link>
      </li>
      <li className="li-nav">
        <Link href="/">Personal</Link>
      </li>
      <li className="li-nav">
        <Link href="/">Pricing</Link>
      </li>
      <li className="li-nav">
        <Link href="/">Documentation</Link>
      </li>
      <li className="li-nav">
        <button className="flex-items-center gap-2">
          <p>Products</p>
          <Image src={icon} alt="icon" />
        </button>
      </li>
      <li className="company text-white md:text-black-secondary hover:underline">
        <Link href="/">Company</Link>
      </li>
    </ul>
  );
};

export default ULMobile;
