import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (e) => {
    const linkRect = e.target.getBoundingClientRect();
    setDropdownPosition({ top: linkRect.bottom, left: linkRect.left });
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
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
        className={`p-4 dark:bg-gray-100 dark:text-gray-800 md:hidden ${
          isScrolled ? "fixed top-0 left-0 right-0 z-10 bg-white shadow-lg" : ""
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
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
            <Link
              
             
              className="flex items-center px-4 -mb-1"
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
            >
              Solutions
            </Link>
            {/* Dropdown */}
            {isDropdownOpen && (
              <ul
                className="absolute bg-white shadow-md"
                style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
              >
                <li>
                  <Link
                    to="/solution1"
                    rel="noopener noreferrer"
                    href="#"
                    className="block px-4 py-2"
                  >
                    Solution 1
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solution2"
                    rel="noopener noreferrer"
                    href="#"
                    className="block px-4 py-2"
                  >
                    Solution 2
                  </Link>
                </li>
                
              </ul>
            )}
          </li>
          <li className="flex">
            <a
              href="#"
              className="flex items-center px-4 -mb-1"
            >
              About
            </a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="flex items-center px-4 -mb-1"
            >
              Contact
            </a>
          </li>
        </ul>
      </header>

      {/* Desktop Navbar */}
      <nav
        className={`hidden md:block bg-gray-100 dark:bg-white p-2 ${
          isScrolled ? "fixed top-0 left-0 right-0 z-10" : ""
        }`}
      >
        <div className="container mx-5 ">
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
                  rel="noopener noreferrer"
                  href="#"
                  className="text-gray-800 dark:text-black px-4 py-2"
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/solutions"
                  rel="noopener noreferrer"
                  href="#"
                  className="text-gray-800 dark:text-black px-4 py-2"
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={closeDropdown}
                >
                  Solutions
                </Link>
                {/* Dropdown */}
                {isDropdownOpen && (
                  <ul
                    className="absolute bg-white shadow-md"
                    style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
                  >
                    <li>
                      <Link
                        to="/solution1"
                        rel="noopener noreferrer"
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Solution 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/solution2"
                        rel="noopener noreferrer"
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Solution 2
                      </Link>
                    </li>
                    {/* Add more dropdown items as needed */}
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 dark:text-black px-4 py-2"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 dark:text-black px-4 py-2"
                >
                  Contact
                </a>
              </li>
              {/* Add more desktop navigation items as needed */}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Outlet />
    </div>
  );
}
