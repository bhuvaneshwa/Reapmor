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
    <div>
      <div
        className="relative h-screen bg-cover  bg-center"
        style={{
          backgroundImage: 'url("/home-image.jpg")',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-65"></div>

        <div className="absolute sm:pt-20 sm:mx-0 xl:mx-14 sm:w-full w-4/5 m-24 top-1/4 left-1/10 transform -translate-y-1/2 text-left px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <div className="w-full">
              <h1 className="text-4xl lg:text-[60px] text-white font-extralight tracking-wide leading-normal mb-8">
                <span className="">A digital identity</span> <br />
                <span className="mr-2 pt-4">for every</span> <br />
                <span className="mr-2 text-[#c2fc03]  xl:text-[60px]">{texts[textIndex]}</span>
              </h1>
            

              <p className="text-[18px]  tracking-wider  leading-8  font-extralight text-justify text-white mb-8">
                Introducing India’s first digital agriculture directory, reimagining the industry with <br/>innovative data-driven solutions for 
                 procurement, crop planning and targeted marketing.
              </p>

            
             
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
