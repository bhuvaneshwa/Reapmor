import { useState, useEffect } from "react";

export default function Directory() {
  const [coverageData, setCoverageData] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch(
      "https://n2q3kdouzl.execute-api.ap-south-1.amazonaws.com/frontendapi/homePageCoverage"
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
      <section className="p-6 dark:bg-gray-950 dark:text-white mx-4 bg-opacity-35">
        <h1 className="text-center text-3xl">Our Directory Coverage</h1>
        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
          {coverageData &&
            Object.entries(coverageData).map(([category, value]) => (
              <div
                key={category}
                className="flex flex-col justify-start m-2 lg:m-6"
              >
                <p className="text-sm sm:text-base">{category}</p>
                <p className="text-4xl font-bold leading-none lg:text-6xl">
                  {value}
                </p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
