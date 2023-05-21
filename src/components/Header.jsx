import { useState } from 'react';
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';

import logo from '../assets/images/logo/john bailey.png';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <header className="bg-primary-200 text-white fixed z-30 top-0 right-0 left-0">
      <div className="font-semibold max-w-[1024px] p-2 h-[90px] mx-auto flex justify-between items-center transition-all duration-300">
        {/* logo */}
        <a className="" href="/">
          <img className=" object-cover h-[40px]" src={logo} alt="logo" />
        </a>

        {/* nav - initially hidden - show in desktop mode */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-x-8  uppercase">
            <li>
              <a href="/people" className="hover:text-neutral-300 transition">
                People
              </a>
            </li>

            <li>
              <a
                href="/expertise"
                className="hover:text-neutral-300 transition"
              >
                Expertise
              </a>
            </li>

            <li>
              <a href="/insights" className="hover:text-neutral-300 transition">
                Insights
              </a>
            </li>
          </ul>
        </nav>

        {/* nav menu button - hide on desktop */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="lg:hidden absolute right-4"
        >
          {navMobile ? (
            <RiCloseFill className="text-3xl text-white cursor-pointer" />
          ) : (
            <RiMenu4Fill className="text-3xl text-white cursor-pointer" />
          )}
        </div>

        {/* nav mobile - hide on desktop */}
        <nav
          className={`${
            navMobile ? 'min-h-screen text-white' : 'min-h-0'
          } w-full fixed top-[90px] left-0 right-0 bg-primary-200 -bottom-12 z-10 lg:hidden overflow-hidden transition-all h-0`}
        >
          <ul className="w-full border-t-[1px] uppercase top-0 left-0 h-full flex flex-col justify-center items-center gap-y-8">
            <li>
              <a href="/people" className="hover:text-neutral-300 transition">
                People
              </a>
            </li>

            <li>
              <a
                href="/expertise"
                className="hover:text-neutral-300 transition"
              >
                Expertise
              </a>
            </li>

            <li>
              <a href="/insights" className="hover:text-neutral-300 transition">
                Insights
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
