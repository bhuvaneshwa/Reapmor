export default function SecHero() {
    return (
      <div className="mx-10">
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-stretch">
              {/* Left column with an image */}
              <div className="lg:col-start-1 lg:row-start-1  flex items-center justify-center lg:-mt-12 ">
              <div className="relative h-[30rem] lg:h-auto">
                <img
                  src="/agri02.jpg"
                  alt=""
                  className=" object-cover w-full h-full"
                />
              </div>
            </div>
              {/* Right column with text content */}
              <div className="lg:mt-0 lg:col-start-2 flex flex-col justify-center">
                <h3 className="xl:text-3xl font-bold tracking-tight text-center sm:text-2xl dark:text-gray-900">
                  Business objectives facilitated by Reapmor
                </h3>
                <div className="mt-12 space-y-12">
                  {/* Each business objective represented as a flex container */}
                  <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-md">
                      <img src="/target.png" alt="Target icon" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg xs:text-left font-medium leading-6 dark:text-gray-900">
                        Direct your marketing spend to the right farmers
                      </h4>
                    </div>
                  </div>
  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-md">
                      <img src="/hold-hands.png" alt="Target icon" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg xs:text-left font-medium leading-6 dark:text-gray-900">
                        Build great farmer relationships
                      </h4>
                    </div>
                  </div>
  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-md">
                      <img src="/online-analytical.png" alt="Target icon" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg xs:text-left font-medium leading-6 dark:text-gray-900">
                        Improve organizational performance through competitive intelligence
                      </h4>
                    </div>
                  </div>
  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-md">
                      <img src="/survey.png" alt="Target icon" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg xs:text-left font-medium leading-6 dark:text-gray-900">
                        Identify and analyze needs of the farmer through customized surveys
                      </h4>
                    </div>
                  </div>
                  {/* Repeat this structure for other business objectives */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  