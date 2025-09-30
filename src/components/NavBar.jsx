import { IoBookOutline, IoMenuSharp } from 'react-icons/io5';
import { navLinks } from '../data/NavLinks.js';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

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
        {isOpen ? <IoMdClose size={25} /> : <IoMenuSharp size={25} />}
      </button>

      {/* nav bar menu */}
      <nav
        className={`${
          isOpen ? 'flex' : 'hidden'
        } transparent-background p-5 absolute top-[100%] right-0 left-0 md:relative md:bg-inherit md:p-0 md:top-auto md:flex`}
      >
        <ul className="flex items-center flex-col w-full gap-2 md:flex-row ">
          {navLinks.map(({ label, path, Icon, variant }) => {
            return (
              <NavLink
                to={path}
                key={path}
                className={({ isActive }) =>
                  variant
                    ? 'border rounded-md py-1 px-4 shadow-md border-zinc-300 hover:bg-purple-300'
                    : `  py-1 px-4 rounded-md ${
                        isActive ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'hover:bg-purple-300'
                      }`
                }
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
