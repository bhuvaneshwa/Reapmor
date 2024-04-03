import { useState, useEffect } from "react";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Farmer", "Farm Gate Buy", "Agri Business"];

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
        <div className="absolute sm:mx-0 sm:w-full m-24 top-1/4 left-1/5 transform -translate-y-1/2 text-left px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl lg:text-5xl text-white font-light leading-tight mb-8">
                A Digital Identity <br />
                <span className="mr-2 pt-4">for Every</span> <br />
                <span className="mr-2 text-green-600 font-bold lg:text-6xl xl:text-7xl">{texts[textIndex]}</span>
              </h1>
              <p className="text-lg text-justify  text-white mb-8">
                Introducing Indiafirst digital agriculture directory, reimagining the industry with data-driven solutions for procurement, crop planning, and targeted marketing.
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
