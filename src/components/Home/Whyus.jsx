export default function Whyus() {
  return (
    <div>
      <section className="my-8 mx-10 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <hr className="w-full border-t border-gray-300 my-4" />
          <h1 className="p-4 text-[18px] text-black  sm:text-justify font-extralight leading-none lg:text-center">
            At Reapmor, Our commitment lies in maintaining an up-to-date
            directory, enabling you to acquire farmers for your requirements
            easily while focusing on your business.
          </h1>
          <hr className="w-full border-t border-gray-300 my-4" />
        </div>
        <div className="container flex flex-col items-center font-bold mx-auto text-3xl">
          <h1 className="text-green-600 mb-8">Why Reapmor?</h1>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center mx-auto">
          <div className="cursor-pointer flex flex-col max-w-sm mx-4 my-6 shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
              <img
                src="https://spinoff.nasa.gov/sites/default/files/2020-08/ee_29_web_1.jpg"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div
                className="flex flex-col justify-between p-6 space-y-8 
              
              "
              >
                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-wide text-center text-green-600">
                    Comprehensive coverage
                  </h2>
                  <p className="dark:text-gray-800  text-center">
                  Build data-driven strategies backed by a wealth of agricultural information.

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer flex flex-col max-w-sm mx-4 my-6 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
              <img
                src="/datacopy_photo.jpeg.jpg"
                alt=""
                className="object-cover  object-left w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                 


                  <h2 className="text-xl font-bold tracking-wide text-center text-green-600">
                    Accurate Information
                  </h2>
                  <p className="dark:text-gray-800 text-center ">
                  Trust in our precise and reliable data for optimised outcomes in your business.

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer flex flex-col max-w-sm mx-4 my-6 shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
              <img
                src="/farm_stages.jpg"
                alt=""
                className="object-cover object-fit object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-wide text-center text-green-600">
                    Timely Refresh
                  </h2>
                  <p className="dark:text-gray-800 text-center ">
                  Stay ahead with our directory's near real-time updates available at your fingertips
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer flex flex-col max-w-sm mx-4 my-6 shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
              <img
                src="
                /why4copy.jpg
                "
                alt=""
                className="object-cover object-bottom w-full rounded-t-md h-72  dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-wide text-center text-green-600">
                    Actionable Insights
                  </h2>
                  <p className="dark:text-gray-800 text-center ">
                  Unlock actionable & practical recommendations to enhance your decision-making efficiency.
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
