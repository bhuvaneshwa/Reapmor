import { useState, useEffect } from "react";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Crop", "Farmer", "Farm Gate Buyer", "Agri Business"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((index) => (index + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("/bg.webp")',
        }}
      >
        <div className="absolute sm:mx-0 xl:mx-14 sm:w-full m-24 top-1/4 left-1/5 transform -translate-y-1/2 text-left px-8 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl lg:text-[60px] text-white font-light tracking-wide leading-normal mb-8">
                <span className="">A digital identity</span> <br />
                <span className="mr-2 pt-4">for every</span> <br />
                <span className="mr-2 text-[#c2fc03] lg:text-6xl xl:text-[60px]">
                  {texts[textIndex]}
                </span>
              </h1>
              <p className="text-[17px] font-light text-justify text-white mb-8">
                Introducing {"India's"} first digital agriculture directory, reimagining the industry with data-driven solutions for crop planning, procurement, and targeted marketing.
              </p>
              <button className="px-6 py-3 bg-white text-black rounded-full font-light hover:text-white hover:bg-green-800 transition duration-300 ease-in-out">
                View Coverage
              </button>
            </div>
            {/* You can add another grid item for additional content */}
          </div>
        </div>
      </div>
    </div>
  );
}
