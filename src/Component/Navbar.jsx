import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const classNameNavlink = ({ isActive }) =>
    isActive ? "text-red-500 " : "text-black ";

  const navlinkData = [
    { link: "/home", name: "Home" },
    { link: "/about", name: "About" },
    { link: "/ourservice", name: "Our Service" },
    { link: "/ourwork", name: "Our Work" },
    { link: "/career", name: "Career" },
    { link: "/contact", name: "Contact" },
  ];
  return (
    <div className="h-16 w-full shadow-md bg-gradient-to-r from-white via-white to-white text-black flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="text-2xl font-bold flex items-center">
        <div className="bg-gray-700   flex items-center justify-center  mr-32">
          <div>
            <a href="/home">
              <img
                src="../../public/image/today.png"
                alt=" hello"
                className="h-12 w-30  rounded-xl"
              />
            </a>
          </div>
        </div>
      </div>
      <ul className="hidden sm:flex gap-8 text-lg mx-10 ">
        {navlinkData.map((item) => {
          return (
            <NavLink
              key={item.link}
              className={classNameNavlink}
              to={item.link}
            >
              <li className="hover:text-blue-400 cursor-pointer">
                {item.name}
              </li>
            </NavLink>
          );
        })}
      </ul>
      <div className="hidden sm:flex gap-4"></div>
      <div
        className="sm:hidden flex flex-col gap-1 cursor-pointer"
        onClick={toggleMobileMenu}
      >
        <div className="w-6 h-1 bg-black"></div>
        <div className="w-6 h-1 bg-black"></div>
        <div className="w-6 h-1 bg-black"></div>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black  text-white flex flex-col items-center py-6 sm:hidden z-10">
          <ul className="flex flex-col gap-6 text-lg text-white">
            {navlinkData.map((item) => {
              return (
                <NavLink
                  key={item.link}
                  className={classNameNavlink}
                  to={item.link}
                >
                  <li className=" text-blue-600  hover:text-blue-400 cursor-pointer">
                    {item.name}
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
