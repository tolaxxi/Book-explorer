import { IoBookOutline, IoMenuSharp } from 'react-icons/io5';
import { navLinks } from '../data/NavLinks.js';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavBar() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full px-5 py-3 flex items-center justify-between shadow-2xs relative">
      <div className="flex items-center text-blue-800 font-bold text-xl">
        <IoBookOutline size={25} />
        <h1 className="ml-2">Book Explorer</h1>
      </div>

      {/* mobile menu */}
      <button className="md:hidden" onClick={toggleNavBar}>
        <IoMenuSharp size={25} />
      </button>

      {/* nav bar menu */}
      <nav
        className={`${
          isOpen ? 'hidden' : 'flex'
        } bg-amber-100 p-5 absolute top-[100%] right-0 left-0 md:relative md:bg-inherit md:p-0 md:top-auto md:flex`}
      >
        <ul className="flex items-center flex-col w-full gap-2 md:flex-row ">
          {navLinks.map(({ label, path, Icon, variant }) => {
            return (
              <NavLink
                to={path}
                key={path}
                className={`${
                  variant
                    ? 'border rounded-md py-1 px-3 shadow-2xl border-zinc-300 hover:bg-purple-300'
                    : 'hover:bg-purple-300 py-2 px-4 rounded-md '
                }`}
              >
                {Icon ? (
                  <span className="flex items-center">
                    {<Icon className="mr-1.5" />} {label}
                  </span>
                ) : (
                  label
                )}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
