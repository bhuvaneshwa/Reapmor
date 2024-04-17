import Footer from "./Footer";

export default function Contact() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <section className="py-24 xs:p-14 w-full max-w-6xl xl:-mt-[15rem] lg:xl:-mt-[15rem]">
          <div className="grid grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold text-green-600">
                Get in touch
              </h1>

              <div className="space-y-8 mt-5">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    C2-603, Nova, Paranur, Chengalpattu,<br/> Tamil Nadu {"-"} 603002
                  </span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+91 8061115162</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>narain.tm@reapmor.com</span>
                </p>
              </div>
            </div>

            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold text-green-600">Follow us</h1>

              <div className="space-y-8 mt-5">
                <p className="flex items-center">
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/reapmor"
                    title="Linkedin"
                    className="flex items-center "
                  >
                    <img
                      src="/linkedin.svg"
                      className="w-16 h-12    fill-current"
                    />
                    <h1 className="pl-5 text-xl">Linkedin</h1>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
