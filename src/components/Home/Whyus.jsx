import Directory from "./Directory";

export default function Whyus() {
  return (
    <div>
      <section className="my-5 mx-10 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center mx-auto mb-1 md:p-1 md:px-12">
          <hr className="w-full border-t border-gray-300 my-4" />
          <h1 className="p-4 text-lg xs:text-lg md:text-xl lg:text-2xl text-center font-normal" style={{lineHeight: "2.25rem"}}>
            At Reapmor, Our commitment lies in maintaining an up-to-date
            directory, enabling you to take data-driven business decisions.
          </h1>
          <hr className="w-full border-t border-gray-300 my-4" />
        </div>

        <Directory />

        <div className="container flex flex-col items-center mx-auto mt-5">
          <h1 className="text-3xl font-semibold xs:text-3xl md:text-4xl lg:text-3xl text-black mb-8 xs:mb-8 xs:mt-8">
            Why Reapmor?
          </h1>
        </div>

        <div className="container grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mx-auto">
         
          <div className="cursor-pointer flex flex-col max-w-sm  mx-4 my-6 transition duration-300 hover:-translate-y-1 hover:scale-110">
            <div className="max-w-xs lg:w-[17rem]  rounded-md shadow-md">
              <img
                src="https://spinoff.nasa.gov/sites/default/files/2020-08/ee_29_web_1.jpg"
                alt=""
                className="object-cover object-center w-full rounded-t-md xs:h-60  sm:h-72"
              />
              <div className="flex flex-col justify-between p-6 space-y-2">
                <h2 className="text-xl xs:text-2xl xs:font-normal font-bold tracking-wide text-center text-green-600">
                  Comprehensive <br/> Coverage
                </h2>
                <p className="text-center xs:text-lg leading-7">
                  Build data-driven strategies backed by a wealth of
                  agricultural information.
                </p>
              </div>
            </div>
          </div>

          <div className="cursor-pointer flex flex-col max-w-sm mx-4 my-6 transition duration-300 hover:-translate-y-1 hover:scale-110">
            <div className="max-w-xs lg:w-[17rem] rounded-md shadow-md">
              <img
                src="/datacopy_photo.jpeg.jpg"
                alt=""
                className="object-cover object-left-bottom w-full rounded-t-md sm:h-72"
              />
              <div className="flex flex-col justify-between p-6 space-y-2">
                <h2 className="text-2xl font-bold tracking-wide text-center xs:font-normal text-green-600">
                  Accurate<br/> Information
                </h2>
                <p className="text-center xs:text-lg leading-7">
                  Trust in our precise and reliable data for optimised outcomes
                  in your business.
                </p>
              </div>
            </div>
          </div>

          <div className="cursor-pointer flex flex-col max-w-sm mx-4 my-6 transition duration-300 hover:-translate-y-1 hover:scale-110">
            <div className="max-w-xs lg:w-[17rem] rounded-md shadow-md">
              <img
                src="/Farming-Cycle.png"
                alt=""
                className="object-cover object-center w-full rounded-t-md sm:h-72"
              />
              <div className="flex flex-col justify-between p-6 space-y-2">
                <h2 className="text-xl xs:text-2xl font-bold tracking-wide text-center xs:font-normal text-green-600">
                  Timely <br/> Refresh
                </h2>
                <p className="text-center xs:text-lg leading-7">
                  Stay ahead with our {"directory's"} real-time updates
                  available at your fingertips.
                </p>
              </div>
            </div>
          </div>

          <div className="cursor-pointer flex flex-col max-w-sm mx-4 my-6 transition duration-300 hover:-translate-y-1 hover:scale-110">
            <div className="max-w-xs lg:w-[17rem] rounded-md shadow-md">
              <img
                src="/why42.jpg"
                alt=""
                className="object-cover object-center w-full rounded-t-md sm:h-72"
              />
              <div className="flex flex-col justify-between p-6 space-y-2">
                <h2 className="text-xl xs:text-2xl font-bold tracking-wide text-center xs:font-normal text-green-600">
                  Actionable <br/> Recommendations 
                </h2>
                <p className="text-center xs:text-lg leading-7">
                  Unlock actionable & practical insights to enhance your
                  decision-making efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Repeat similar structure for other cards */}
        </div>
      </section>
    </div>
  );
}
