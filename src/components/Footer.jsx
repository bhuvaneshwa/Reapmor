import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const footerLinks = document.querySelectorAll(".footer-link");

    footerLinks.forEach((link) => {
      link.addEventListener("click", handleScrollToTop);
    });

    return () => {
      footerLinks.forEach((link) => {
        link.removeEventListener("click", handleScrollToTop);
      });
    };
  }, []);



  return (
    <div>
      <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center">
                <img src="/image.png" className="h-10" />
              </div>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-6">
              <h3 className="tracking-wide uppercase font-bold dark:text-gray-900">
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="footer-link">
                    Digital Directory
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="tracking-wide font-bold uppercase dark:text-gray-900">
                Solutions
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/agribusiness" className="footer-link">
                    For Agribusiness
                  </Link>
                </li>
                <li>
                  <a href="#">
                    {/* onClick={() => handleExternalLinkClick("external-link-url")} */}
                    For Farmers (coming soon)
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="uppercase font-bold dark:text-gray-900">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/contactus" className="footer-link">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="#">
                    {/* onClick={() => handleExternalLinkClick("external-link-url")} */}
                    Our Story (coming soon)
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="uppercase font-bold dark:text-gray-900">Social media</div>
              <div className="flex justify-start mr-4 space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/reapmor/about/"
                  title="Linkedin"
                  className="flex items-center p-1"
                  //   onClick={() => handleExternalLinkClick("linkedin-url")}
                >
                  <img src="/linkedin.svg" className="w-5 h-5 fill-current" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 text-sm text-center dark:text-gray-600">
          © 2024 Reapmor All rights reserved.
        </div>
      </footer>
    </div>
  );
}
