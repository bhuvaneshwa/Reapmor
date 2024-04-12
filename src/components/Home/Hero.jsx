import { useState, useEffect } from "react";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Crop", "Farmer", "Farm Gate Buyer", "Agri Business"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((index) => (index + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div
      className="relative h-screen bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: 'url("/home-image.jpg")', // Replace "/home-image.jpg" with the path to your background image
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-65"></div>

      <div className="absolute inset-0 flex items-center justify-center font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 px-4 md:px-8 lg:px-16 xl:px-24">
          <h1 className=" text-4xl lg:text-left sm:text-5xl lg:text-6xl text-white font-extralight leading-normal tracking-wider sm:text-left mb-8" style={{ lineHeight: "1.4" }}>
            <span>A digital identity</span> <br />
            <span className="mt-5">for every</span> <br />
            <span className="text-[#c2fc03] lg:text-6xl">
              {texts[textIndex]}
            </span>
          </h1>

          <p className="md:text-xl lg:text-md xl:text-2xl text-white font-light mb-8 " style={{lineHeight: "50px"}}>
            Introducing India’s first digital agriculture directory, reimagining
            the industry with innovative data-driven solutions for procurement,
            crop planning, and targeted marketing.
          </p>
        </div>
      </div>
    </div>
  );
}
