import { useEffect, useState } from "react";

export default function Whyus() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay to ensure CSS classes are applied
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    // Clear the timer on component unmount to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section className="my-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <hr className="w-full border-t border-gray-300 my-4" />
          <h1 className="p-4 text-xl font-semibold leading-none text-center">
            At Reapmor, Our commitment lies in maintaining an up-to-date
            directory, enabling you to acquire farmers for your requirements
            easily while focusing on your business.
          </h1>
          <hr className="w-full border-t border-gray-300 my-4" />
        </div>
        <div className="container flex flex-col items-center font-bold mx-auto text-3xl">
          <h1 className="text-green-600 mb-8">Why Reapmor?</h1>
        </div>

        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          <div
            className={`flex flex-col max-w-sm mx-4 my-6 shadow-lg ${
              animate
                ? "transform translate-y-0 opacity-100 transition duration-500 ease-in"
                : "transform translate-y-10 opacity-0"
            }`}
          >
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
              <img
                src="/01.jpeg"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-wide text-green-600">
                    Comprehensive coverage
                  </h2>
                  <p className="dark:text-gray-800">
                    Our directory offers extensive agricultural data for
                    informed decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col max-w-sm mx-4 my-6 shadow-lg ${
              animate
                ? "transform translate-y-0 opacity-100 transition duration-500 ease-in"
                : "transform translate-y-10 opacity-0"
            }`}
          >
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
              <img
                src="/01.jpeg"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-wide text-green-600">
                    Accurate Information
                  </h2>
                  <p className="dark:text-gray-800">
                    Trust in our precise and reliable data for optimised
                    outcomes in agriculture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col max-w-sm mx-4 my-6 shadow-lg ${
              animate
                ? "transform translate-y-0 opacity-100 transition duration-500 ease-in"
                : "transform translate-y-10 opacity-0"
            }`}
          >
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
              <img
                src="/01.jpeg"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-wide text-green-600">
                    Timely Refresh
                  </h2>
                  <p className="dark:text-gray-800">
                    Stay ahead with our {"directory's"} timely updates available at
                    your fingertips.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col max-w-sm mx-4 my-6 shadow-lg ${
              animate
                ? "transform translate-y-0 opacity-100 transition duration-500 ease-in"
                : "transform translate-y-10 opacity-0"
            }`}
          >
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
              <img
                src="/01.jpeg"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-wide text-green-600">
                    Actionable Insights
                  </h2>
                  <p className="dark:text-gray-800 ">
                    We provide practical recommendations to enhance
                    decision-making efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat the same structure for other elements */}
        </div>
      </section>
    </div>
  );
}
