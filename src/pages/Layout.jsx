import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

// Dropdown Menu Component
const DropdownMenu = () => {
  return (
    <ul className="absolute mt-8 bg-white shadow-lg rounded-md w-48  py-2">
      <li>
        <Link to="/farmer" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          For Farmer
        </Link>
      </li>
      <li>
        <Link to="/agribusiness" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">For AgriBusiness</Link>
      </li>
      
    </ul>
  );
};

const DropdownAbout = () => {
  return (
    <ul className="absolute mt-8 bg-white shadow-lg rounded-md w-48 py-2">
      <li>
        <Link to="/ourstory" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Our Story</Link>
      </li>
      <li>
        <Link to="/contactus" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact Us</Link>
      </li>
    
    </ul>
  );
};

export default function Layout() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const toggleAbout = () => {
    setIsOpenAbout(!isOpenAbout);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Mobile Navbar */}
      <header
        className={`p-4 dark:bg-gray-100 dark:text-gray-800 md:hidden fixed top-0 left-0 right-0 z-10 ${
          isScrolled ? "bg-white shadow-lg" : ""
        }`}
      >
        <div className="container flex justify-between items-center mx-auto">
          <Link
            to="/"
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img src="/image.png" alt="Logo" className="h-8 mr-2" />
          </Link>
          <button className="flex justify-end p-4" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpenMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpenMenu || isScrolled ? "flex" : "hidden"
          } flex-col items-center space-y-3 bg-gray-100 text-black dark:bg-white w-full py-4`}
        >
          <li className="flex">
            <Link
              to="/"
              className="flex items-center px-4 -mb-1 hover:bg-green-600 w-full hover:text-white"
            >
              Home
            </Link>
          </li>
          <li className="flex relative">
            <a href="#" className="flex items-center px-4 -mb-1" onClick={toggleAbout}>
              About
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-4 h-4 ml-1 transition-transform ${
                  isOpenAbout ? "transform rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            {isOpenAbout && <DropdownAbout />}
          </li>
          <li className="flex relative">
            <a href="#" className="flex items-center px-4 -mb-1" onClick={toggleMenu}>
              Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-4 h-4 ml-1 transition-transform ${
                  isOpenMenu ? "transform rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            {isOpenMenu && <DropdownMenu />}
          </li>
        </ul>
      </header>

      {/* Desktop Navbar */}
      <nav
        className={`hidden md:block bg-gray-100 dark:bg-white p-2 ${
          isScrolled ? "fixed top-0 left-0 right-0 z-10" : ""
        }`}
      >
        <div className="container ">
          <div className="container flex justify-between items-center mx-auto">
            <Link
              to="/"
              rel="noopener noreferrer"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <img src="/image.png" alt="Logo" className="h-8 mr-2" />
            </Link>
            <ul className="flex justify-between items-center">
              <li>
                <Link
                  to="/"
                  className="text-gray-800 dark:text-black px-4 py-2"
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="text-gray-800 dark:text-black px-4 py-2 cursor-pointer flex items-center"
                  onClick={toggleAbout}
                >
                  About
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-4 h-4 ml-1 transition-transform ${
                      isOpenAbout ? "transform rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
                {isOpenAbout && <DropdownAbout />}
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="text-gray-800 dark:text-black px-4 py-2 cursor-pointer flex items-center"
                  onClick={toggleMenu}
                >
                  Solutions
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-4 h-4 ml-1 transition-transform ${
                      isOpenMenu ? "transform rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
                {isOpenMenu && <DropdownMenu />}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Outlet />
    </div>
  );
}
