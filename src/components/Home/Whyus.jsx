import Directory from "./Directory";

export default function Whyus() {
  return (
    <div>
      <section className="my-5 mx-10 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center mx-auto mb-1 md:p-1 md:px-12">
          <hr className="w-full border-t border-gray-300 my-4" />
          <h1 className="p-4 text-[18px] sm:text-md  text-black  sm:text-center font-normal leading-normal lg:text-center">
            At Reapmor, Our commitment lies in maintaining an up-to-date directory,<br/> enabling you to take data-driven business decisions.
          </h1>
          <hr className="w-full border-t border-gray-300 my-4" />
        </div>

        <Directory/>
        <div className="container flex flex-col items-center mx-auto text-3xl">
          <h1 className="text-black mb-8">Why Reapmor?</h1>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center mx-auto">
          <div className="cursor-pointer flex flex-col max-w-sm mx-4 my-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110">
            <div className="max-w-xs rounded-md shadow-md">
              <img
                src="https://spinoff.nasa.gov/sites/default/files/2020-08/ee_29_web_1.jpg"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-wide text-center text-green-600">
                    Comprehensive coverage
                  </h2>
                  <p className="text-center">
                    Build data-driven strategies backed by a wealth of agricultural information.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="cursor-pointer flex flex-col max-w-sm mx-4 my-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110">
            <div className="max-w-xs rounded-md shadow-md">
              <img
                src="datacopy_photo.jpeg.jpg"
                alt=""
                className="object-cover object-left w-full rounded-t-md h-72"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-wide text-center text-green-600">
                  Accurate Information
                  </h2>
                  <p className="text-center">
                  Trust in our precise and reliable data for optimised outcomes in your business.</p>
                </div>
              </div>
            </div>
          </div>



          <div className="cursor-pointer flex flex-col max-w-sm mx-4 my-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110">
            <div className="max-w-xs rounded-md shadow-md">
              <img
                src="https://blog.machinefinder.com/wp-content/uploads/2017/02/Farming-Cycle.png"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-wide text-center text-green-600">
                  Timely Refresh
                  </h2>
                  <p className="text-center">
                  Stay ahead with our {"directory's"} near real-time updates available at your fingertips
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="cursor-pointer flex flex-col max-w-sm mx-4 my-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110">
            <div className="max-w-xs rounded-md shadow-md">
              <img
                src="  /why42.jpg"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-wide text-center text-green-600">
                  Actionable Insights
                  </h2>
                  <p className="text-center">
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
