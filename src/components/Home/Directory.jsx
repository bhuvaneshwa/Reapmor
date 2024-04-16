import { useState, useEffect } from "react";

export default function Directory() {
  const [coverageData, setCoverageData] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch(
      "https://o95qy7pzu1.execute-api.ap-south-1.amazonaws.com/homePageCoverage"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Set the received data to the state
        setCoverageData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      <section className=" dark:bg-gray-700 dark:text-white p-1 bg-opacity-35">
        <h1 className="text-center font-semibold lg:text-3xl sm:text-sm xs:px-5 xs:text-3xl xs:mb-8 xs:mt-8">Our Directory Coverage</h1>
        <div className="container mx-auto grid justify-center xs:gap-4 sm:gap-14 sm:grid-cols-2 md:grid-cols-3 text-center xs:mb-8  lg:grid-cols-6">
          {coverageData &&
            Object.entries(coverageData).map(([category, value]) => (
              <div
                key={category}
                className="flex flex-col justify-start mt-2"
              >
                <p className="text-sm xs:text-xl  sm:text-base">{category}</p>
                <p className="text-4xl font-bold leading-none lg:text-3xl  pt-4 ">
                  {value}
                </p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
