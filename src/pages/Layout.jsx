import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSolution, setIsOpenSolution] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isSolutionSelected, setIsSolutionSelected] = useState(false);
  const [isAboutSelected, setIsAboutSelected] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const toggleSolution = () => {
    setIsOpenSolution(!isOpenSolution);
    setIsSolutionSelected(!isSolutionSelected);
    setIsOpenMenu(false); // Close the mobile menu when a solution is toggled
  };

  const toggleAbout = () => {
    setIsOpenAbout(!isOpenAbout);
    setIsAboutSelected(!isAboutSelected);
    setIsOpenMenu(false); // Close the mobile menu when About is toggled
  };

  const closeDropdowns = () => {
    setIsOpenSolution(false);
    setIsOpenAbout(false);
  };

  const isActive = (pathname) => {
    return location.pathname === pathname ? "border-b-2 border-green-500" : "";
  };

  return (
    <div>
      {/* Mobile Navbar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-10 bg-green-600 dark:bg-white">
        <div className="container flex justify-between items-center sm:mx-0 mx-auto">
          <Link
            to="/"
            className="flex items-center p-2"
            onClick={() => {
              setIsOpenMenu(false); // Close the mobile menu when "Home" is selected
            }}
          >
            <img src="/image.png" alt="Logo" className="h-8 mr-2" />
          </Link>
          <button className="flex justify-end p-4" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800 dark:text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpenMenu
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpenMenu ? "block" : "hidden"
          } bg-gray-100 text-white dark:bg-green-600 w-full`}
        >
          <li>
            <Link to="/" className={`block px-4 py-2 ${isActive("/")}`} onClick={closeDropdowns}>
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={toggleSolution}
              className={`flex items-center justify-between w-full px-4 py-2 focus:outline-none ${isActive(
                "/solution"
              )}`}
            >
              Solutions
              <svg
                className={`ml-2 w-4 h-4 transform ${
                  isOpenSolution ? "rotate-0" : "rotate-180"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 0 1 .707.293l6 6a1 1 0 0 1-1.414 1.414L10 5.414 5.707 9.707a1 1 0 0 1-1.414-1.414l6-6A1 1 0 0 1 10 3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul
              className={`${
                isOpenSolution ? "block" : "hidden"
              } bg-gray-100 text-black dark:bg-white`}
            >
              <li>
                <Link
                  
                  className={`block px-4 py-2 ${isActive("/solution1")}`}
                  onClick={() => {
                    setIsSolutionSelected(true);
                    setIsOpenMenu(false); // Close the mobile menu when a solution is selected
                  }}
                >
                  For Farmer (coming soon)
                </Link>
              </li>
              <li>
                <Link
                  to="/agribusiness"
                  className={`block px-4 py-2 ${isActive("/solution2")}`}
                  onClick={() => {
                    setIsSolutionSelected(true);
                    setIsOpenMenu(false); // Close the mobile menu when a solution is selected
                  }}
                >
                  For Agri Business
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <button
              onClick={toggleAbout}
              className={`flex items-center justify-between w-full px-4 py-2 focus:outline-none ${isActive(
                "/about"
              )}`}
            >
              About Us
              <svg
                className={`ml-2 w-4 h-4 transform ${
                  isOpenAbout ? "rotate-0" : "rotate-180"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 0 1 .707.293l6 6a1 1 0 0 1-1.414 1.414L10 5.414 5.707 9.707a1 1 0 0 1-1.414-1.414l6-6A1 1 0 0 1 10 3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul
              className={`${
                isOpenAbout ? "block" : "hidden"
              } bg-gray-100 text-black dark:bg-white`}
            >
              <li>
                <Link
                  to="/about/team"
                  className={`block px-4 py-2 ${isActive("/about/team")}`}
                  onClick={() => {
                    setIsAboutSelected(true);
                    setIsOpenMenu(false); // Close the mobile menu when About is selected
                  }}
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/about/company"
                  className={`block px-4 py-2 ${isActive("/about/company")}`}
                  onClick={() => {
                    setIsAboutSelected(true);
                    setIsOpenMenu(false); // Close the mobile menu when About is selected
                  }}
                >
                  Our Company
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </header>

      {/* Desktop Navbar */}
      <nav className="hidden md:block bg-gray-100 dark:bg-white md:px-8 lg:px-16 xl:px-24 ">
        <div>
          

         
          
        <div className="container flex items-center">

            <Link
              to="/"
              className="flex w-full items-center pt-2 pb-2"
              aria-label="Back to homepage"
            >
              <img src="/image.png" alt="Logo" className="h-10 mr-2" />
            </Link>

            
            <ul className="flex justify-end  w-full items-center  ">
              <li>
                <Link
                  to="/"
                  className={`text-gray-800 dark:text-black px-4 py-2 ${isActive(
                    "/"
                  )}`}
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={toggleSolution}
                  className={`flex items-center text-gray-800 dark:text-black px-4 py-2 focus:outline-none ${isActive(
                    "/solution"
                  )}`}
                >
                  Solutions
                  <svg
                    className={`ml-2 w-4 h-4 transform ${
                      isOpenSolution ? "rotate-0" : "rotate-180"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 0 1 .707.293l6 6a1 1 0 0 1-1.414 1.414L10 5.414 5.707 9.707a1 1 0 0 1-1.414-1.414l6-6A1 1 0 0 1 10 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <ul
                  className={`${
                    isOpenSolution ? "block" : "hidden"
                  } absolute top-13 left-4 z-20 bg-gray-900 text-black dark:bg-white w-[15rem] py-2`}
                >
                  {/* Add your solution links here */}
                  
                  <li>
                    <Link
                      to="/agribusiness"
                      className="block px-4 py-2 bg-white dark:hover:bg-green-600 hover:text-white "
                      onClick={() => {
                        setIsSolutionSelected(true);
                        setIsOpenSolution(false); // Close the dropdown after a solution is selected
                      }}
                    >
                      For AgriBusiness
                    </Link>
                  </li>

                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 bg-white dark:hover:bg-green-600 hover:text-white"
                      onClick={() => {
                        setIsSolutionSelected(true);
                        setIsOpenSolution(false); // Close the dropdown after a solution is selected
                      }}
                    >
                      For Farmer (coming soon)
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="relative">
                <button
                  onClick={toggleAbout}
                  className={`flex items-center text-gray-800 dark:text-black px-4 py-2 focus:outline-none ${isActive(
                    "/about"
                  )}`}
                >
                  About Us
                  <svg
                    className={`ml-2 w-4 h-4 transform ${
                      isOpenAbout ? "rotate-0" : "rotate-180"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 0 1 .707.293l6 6a1 1 0 0 1-1.414 1.414L10 5.414 5.707 9.707a1 1 0 0 1-1.414-1.414l6-6A1 1 0 0 1 10 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <ul
                  className={`${
                    isOpenAbout ? "block" : "hidden"
                  } absolute top-11 left-4 z-20 bg-gray-100 text-black dark:bg-white w-40 py-2 `}
                >
                  {/* Add your about us links here */}

                  <li>
                    <Link
                      to="/contactus"
                      className="block px-4 py-2 bg-white dark:hover:bg-green-600 hover:text-white"
                      onClick={() => {
                        setIsAboutSelected(true);
                        setIsOpenAbout(false); // Close the dropdown after About is selected
                      }}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 bg-white dark:hover:bg-green-600 hover:text-white"
                      onClick={() => {
                        setIsAboutSelected(true);
                        setIsOpenAbout(false); // Close the dropdown after About is selected
                      }}
                    >
                      Our Story (coming soon)
                    </Link>
                  </li>
                 
                </ul>
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
