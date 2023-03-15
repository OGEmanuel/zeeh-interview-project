import { useState } from 'react';

const HamburgerMenu = ({ onCheck }) => {
  const [checked, setChecked] = useState(false);
  const [hover, setHover] = useState(false);
  const checkedChangeHandler = e => {
    setChecked(e.target.checked);
    onCheck(e.target.checked);
  };

  return (
    <div className="md:hidden">
      <input
        type="checkbox"
        id="navi-toggle"
        className="hidden"
        onChange={checkedChangeHandler}
      />
      <label
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        htmlFor="navi-toggle"
        className="bg-white w-[3rem] h-[3rem] rounded-[50%] fixed z-20 top-[.5rem] right-[1rem] shadow-lg text-center cursor-pointer"
      >
        <span
          className={`w-[1.5rem] h-[2px] before:w-[1.5rem] before:h-[2px] before:bg-blue-feature-card after:w-[1.5rem] after:h-[3px] after:bg-blue-feature-card inline-block before:inline-block after:inline-block relative before:absolute after:absolute before:left-0 after:left-0 mt-[1.45rem] transition-menu ${
            checked
              ? 'bg-transparent before:rotate-[135deg] after:-rotate-[135deg] before:top-[1px] after:top-[0px]'
              : 'bg-blue-feature-card'
          } ${
            hover
              ? 'before:top-[-.45rem] after:top-[.45rem]'
              : 'before:top-[-.3rem] after:top-[.3rem]'
          }`}
        >
          &nbsp;
        </span>
      </label>
      <div
        className={`h-[3rem] w-[3rem] rounded-[50%] fixed bg-mobile-nav top-[.5rem] right-[1rem] z-10 transition-bg ${
          checked ? 'transform-bg' : ''
        }`}
      >
        &nbsp;
      </div>
    </div>
  );
};

export default HamburgerMenu;
