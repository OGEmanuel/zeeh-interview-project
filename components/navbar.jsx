import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo.png';
import icon from '../public/icons/nav-icon.svg';
import { useEffect, useRef, useState } from 'react';
import HamburgerMenu from './UI/hamburger-menu';
import ULMobile from './UI/ul-mobile';
import CTAMobile from './UI/cta-mobile';

const NavBar = props => {
  const [checked, setChecked] = useState(false);
  const { sticky, onGetNavHeight } = props;
  const ref = useRef();

  useEffect(() => {
    onGetNavHeight(ref.current.getBoundingClientRect().height);
  }, [onGetNavHeight]);

  const check = checked => {
    setChecked(checked);
  };

  return (
    <nav
      ref={ref}
      className={`flex-items-center justify-between py-4 px-5 xl:px-10 w-full md:max-w-[55rem] xl:max-w-[100rem] md:mx-auto ${
        sticky ? 'sticky' : ''
      }
      `}
    >
      <Link href="/" className="flex items-center gap-1 xl:gap-4">
        <Image src={logo} alt="logo" className="w-[2rem] xl:w-auto" />
        <p className="xl:text-[1.8125rem] font-mont font-extrabold bg-logo text-transparent bg-clip-text">
          Zeeh
        </p>
      </Link>
      <ULMobile checked={checked} />
      <ul className="hidden md:flex md:gap-2.5 xl:gap-12 font-mont items-center">
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
          <button className="flex-items-center md:gap-1 xl:gap-2">
            <p>Products</p>
            <Image src={icon} alt="icon" />
          </button>
        </li>
        <li className="company text-white md:text-black-secondary hover:underline">
          <Link href="/">Company</Link>
        </li>
      </ul>
      <CTAMobile checked={checked} />
      <div className="hidden md:flex gap-2 text-sm xl:text-lg font-bold font-public">
        <Link
          href="/"
          className="bg-logo text-white nav-button hover:bg-white hover:bg-logo hover:text-transparent hover:bg-clip-text"
        >
          Log in
        </Link>
        <Link
          href="/"
          className="nav-button bg-transparent text-blue-primary hover:bg-logo hover:text-white"
        >
          Sign up
        </Link>
      </div>
      <HamburgerMenu onCheck={check} />
    </nav>
  );
};

export default NavBar;
