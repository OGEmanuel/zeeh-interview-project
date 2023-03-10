import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo.png';
import icon from '../public/icons/icon-nav.svg';
import { useEffect, useRef } from 'react';

const NavBar = props => {
  const { sticky, onGetNavHeight } = props;
  const ref = useRef();

  useEffect(() => {
    onGetNavHeight(ref.current.getBoundingClientRect().height);
  }, []);

  return (
    <nav
      ref={ref}
      className={`flex-items-center justify-between py-4 px-10 ${
        sticky ? 'sticky' : ''
      }
      `}
    >
      <Link href="/" className="flex gap-4">
        <Image src={logo} alt="logo" />
        <p className="text-[1.8125rem] font-mont font-extrabold bg-logo text-transparent bg-clip-text ">
          Zeeh
        </p>
      </Link>
      <ul className="flex gap-12 font-mont">
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
        <li className="company text-black-secondary">
          <Link href="/">Company</Link>
        </li>
      </ul>
      <div className="flex gap-2 text-lg font-bold font-public">
        <Link href="/" className="bg-logo text-white nav-button">
          Log in
        </Link>
        <Link
          href="/"
          className="border border-blue-primary nav-button text-blue-primary"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
