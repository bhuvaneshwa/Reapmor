export default function Agribusiness() {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            'url("https://pbs.twimg.com/media/GCax7e8XUAAHnXE?format=jpg&name=large")',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-65"></div>

        <div className="absolute xs:pt-[25rem] xs:text-center xs:m-5 xs:text-xl  sm:pt-40 sm:mx-0 xl:mx-1 sm:w-full w-4/5 m-24 top-1/4 transform -translate-y-1/2 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <div className="w-full">
              <p className="lg:text-xl text-white xl:mx-20 ">
                {"''"}In the digital age, data is the most valuable asset for
                agricultural businesses,
                <br />
                enabling them to gain insights, make informed decisions, and
                drive sustainable growth.{"''"}
                <br />
                <span className="block mt-4 xs:text-center">- Adi Godrej</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="dark:bg-gray-100 dark:text-gray-800 my-5 mx-10">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="container flex flex-col items-center mx-auto mb-1 md:p-1 md:px-12">
            <hr className="w-full border-t border-gray-300 my-4" />
            <h1
              className="p-4 text-lg xs:text-lg md:text-xl lg:text-2xl text-center font-normal"
              style={{ lineHeight: "2.25rem" }}
            >
              Our aim is to provide businesses with easy-to-use tools which can
              transform the company and drive growth through data driven
              solutions
            </h1>
            <hr className="w-full border-t border-gray-300 my-4" />
          </div>

          <div className="grid lg:gap-8 lg:grid-cols-2  lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                Business objectives facilitated by Reapmor
              </h3>
             
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-50">
                      <img src="/target.png" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      Direct your marketing spend to the right farmers
                    </h4>
                   
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                      <img src="/hold-hands.png" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      Build great farmer relationships
                    </h4>
                   
                  </div>
                </div>

				<div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                      <img src="/online-analytical.png" className="bg-cover" />
                    </div>
                  </div>

                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
					Improve organizational performance through competitive intelligence
                    </h4>
                    
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                      <img src="/survey.png" />
                    </div>
                  </div>

                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      Identify and analyse needs of the farmer through
                      customized surveys
                    </h4>
                   
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src="https://source.unsplash.com/random/360x480"
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>

          <div>
            {/* <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                  Eam nibh gloriatur ex
                </h3>
                <p className="mt-3 text-lg dark:text-gray-600">
                  Per odio fabellas consulatu cu. Utroque detracto mel ea, quo
                  te latine theophrastus. Ea his tale nibh dissentias, mei
                  exerci tamquam euripidis cu.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                        Cibo augue offendit has ad
                      </h4>
                      <p className="mt-2 dark:text-gray-600">
                        An per velit appellantur, ut utinam minimum nominavi
                        sit, odio nostro habemus ne nec. Ne sonet regione
                        contentiones est.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                        At eum ferri luptatum lobortis
                      </h4>
                      <p className="mt-2 dark:text-gray-600">
                        Te per quidam maiorum ocurreret, etiam delicatissimi usu
                        ad. Ne has quod periculis. Te sit primis iisque
                        efficiantur.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                        Dicunt verterem evertitur eu sea
                      </h4>
                      <p className="mt-2 dark:text-gray-600">
                        Audire principes rationibus eam an, autem nominavi
                        luptatum per te. Sumo fabulas vim eu, sonet saperet
                        eleifend ut vix.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src="https://source.unsplash.com/random/361x481"
                  alt=""
                  className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
