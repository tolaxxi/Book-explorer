import { IoBookOutline, IoMenuSharp } from 'react-icons/io5';
import { navLinks } from '../data/NavLinks.js';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavBar() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="min-w-full px-5 py-3 flex items-center sticky justify-between shadow-2xs top-0 bg-white">
      <Link to="/" className="flex items-center font-bold text-xl">
        <IoBookOutline size={25} className="text-violet-500" />
        <h2 className="ml-2 bg-linear-to-br from-pink-500 to-violet-500 bg-clip-text  text-transparent">
          Book Explorer
        </h2>
      </Link>

      {/* mobile menu */}
      <button className="md:hidden" onClick={toggleNavBar}>
        {isOpen ? <IoMdClose size={25} /> : <IoMenuSharp size={25} />}
      </button>

      {/* nav bar menu */}
      <nav
        className={`${
          isOpen ? 'flex' : 'hidden'
        } transparent-background p-5 absolute top-[100%] right-0 left-0 md:relative md:bg-inherit md:p-0 md:top-auto md:flex h-80 md:h-auto`}
      >
        {/* menu items */}

        <ul className="flex items-center flex-col w-full md:gap-2  gap-10 md:flex-row ">
          {navLinks.map(({ label, path, Icon, variant, id }) => {
            return (
              <NavLink
                to={path}
                key={id}
                className={({ isActive }) =>
                  variant
                    ? 'border rounded-md py-1 px-4 shadow-md border-zinc-300 bg-white hover:bg-purple-300'
                    : `  py-1 px-4 rounded-md ${
                        isActive ? 'bg-violet-500 text-white hover:bg-indigo-500' : 'hover:bg-purple-300'
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
