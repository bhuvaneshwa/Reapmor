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
      <section className=" dark:bg-gray-700 dark:text-white  p-4 bg-opacity-35">
        <h1 className="text-center text-sm">Our Directory Coverage</h1>
        <div className="container mx-auto grid justify-center sm:grid-cols-2 md:grid-cols-3 text-center  lg:grid-cols-6">
          {coverageData &&
            Object.entries(coverageData).map(([category, value]) => (
              <div
                key={category}
                className="flex flex-col justify-start m-2 lg:m-6"
              >
                <p className="text-sm sm:text-base">{category}</p>
                <p className="text-4xl font-bold leading-none lg:text-3xl">
                  {value}
                </p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
