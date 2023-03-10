import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <Link>
        <Image />
        <p></p>
      </Link>
      <ul>
        <li>
          <Link></Link>
        </li>
        <li>
          <Link></Link>
        </li>
        <li>
          <Link></Link>
        </li>
        <li>
          <Link></Link>
        </li>
        <li>
          <Link></Link>
        </li>
        <li>
          <Link></Link>
        </li>
      </ul>
      <div>
        <button></button>
        <button></button>
      </div>
    </nav>
  );
};

export default NavBar;
