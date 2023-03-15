import Link from 'next/link';

const CTAMobile = ({ checked }) => {
  return (
    <div
      className={`flex gap-2 text-lg font-bold font-public fixed bottom-[15%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-nav md:hidden
      ${checked ? 'w-max opacity-1 z-30' : 'opacity-0 w-0 -z-30'}
      `}
    >
      <Link
        href="/"
        className={`bg-logo text-white nav-button hover:bg-white hover:bg-logo hover:text-white hover:bg-clip-text 
          ${checked ? 'w-max opacity-1' : 'opacity-0 w-0'}
          
          `}
      >
        Log in
      </Link>
      <Link
        href="/"
        className={`nav-button bg-white text-blue-primary hover:bg-logo hover:text-white 
          
          ${checked ? 'w-max opacity-1' : 'opacity-0 w-0'}

          `}
      >
        Sign up
      </Link>
    </div>
  );
};

export default CTAMobile;
