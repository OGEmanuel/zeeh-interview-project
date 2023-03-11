import Image from 'next/image';
import logo from '../public/images/logo.png';
import cables from '../public/images/cables.svg';
import linkedin from '../public/icons/linkedin.svg';
import twitter from '../public/icons/Twitter.svg';
import ig from '../public/icons/IG.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-footer-bg text-white font-public px-20 pt-20 relative pb-10">
      <div className="flex flex-wrap items-start border-b border-border pb-5 mb-5 gap-16">
        <div className="flex-items-center mt-6 gap-4">
          <Image src={logo} alt="logo" />
          <Link href="/" className="text-sm">
            The future of finance is here!
          </Link>
        </div>
        <div className="text-lg flex flex-wrap justify-between gap-24">
          <ul>
            <li className="font-bold mb-2">Product</li>
            <li className="footer-spacing">
              <Link href="/">Authentication</Link>
            </li>
            <li className="footer-spacing half-width">
              <Link href="/">KYC Verification</Link>
            </li>
            <li className="footer-spacing">
              <Link href="/">Connect</Link>
            </li>
            <li className="footer-spacing half-width">
              <Link href="/">Statement Pages</Link>
            </li>
            <li className="footer-spacing">
              <Link href="/">Direct Debit</Link>
            </li>
            <li className="footer-spacing">
              <Link href="/">Universal Card</Link>
            </li>
          </ul>
          <ul>
            <li className="font-bold footer-spacing">Resources</li>
            <li className="footer-spacing">
              <Link href="/">API docs</Link>
            </li>
            <li className="footer-spacing half-width">
              <Link href="/">Libraries and SDKs</Link>
            </li>
            <li className="footer-spacing">
              <Link href="/">Demo</Link>
            </li>
            <li className="footer-spacing">
              <Link href="/">Join Slack</Link>
            </li>
          </ul>
          <ul>
            <li className="font-bold footer-spacing">Company</li>
            <li className="footer-spacing">
              <Link href="/">About us</Link>
            </li>
            <li className="footer-spacing">
              <Link href="/">Coverage</Link>
            </li>
            <li className="footer-spacing">
              <Link href="/">Contact</Link>
            </li>
            <li className="footer-spacing">
              <Link href="/">Blog</Link>
            </li>
          </ul>
          <ul>
            <li className="font-bold footer-spacing">Legal</li>
            <li className="footer-spacing half-width">
              <Link href="/">Developer Policy</Link>
            </li>
            <li className="footer-spacing">
              <Link href="/">Privacy Policy</Link>
            </li>
            <li className="footer-spacing">
              <Link href="/">End-user Policy</Link>
            </li>
            <li className="footer-spacing">
              <Link href="/">Terms of Use</Link>
            </li>
            <li className="footer-spacing">
              <Link href="/">Cookies</Link>
            </li>
            <li className="footer-spacing">
              <Link href="/">Security</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between flex-wrap">
        <p className="text-sm font-light">
          © All rights reserved, Zeeh Africa 2022
        </p>
        <div className="flex gap-[0.625rem]">
          <Link href="/">
            {' '}
            <Image src={linkedin} alt="LinkedIn" />{' '}
          </Link>
          <Link href="/">
            {' '}
            <Image src={twitter} alt="twitter" />
          </Link>
          <Link href="/">
            {' '}
            <Image src={ig} alt="Instagram" />
          </Link>
        </div>
      </div>
      <Image
        src={cables}
        alt="cables"
        className="absolute left-0 bottom-[40%]"
      />
    </footer>
  );
};

export default Footer;
