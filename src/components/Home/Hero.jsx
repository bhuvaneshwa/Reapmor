import { useState, useEffect } from 'react';

export default function Hero() {

    const [farmerText, setFarmerText] = useState('Farmer');

    useEffect(() => {
      const interval = setInterval(() => {
        setFarmerText(currentText => currentText === 'Farmer' ? 'Farm Gate Buy' : 'Agri Business');
      }, 2000); // Change text every 2 seconds
  
      // Clear the interval to avoid memory leaks
      return () => clearInterval(interval);
    }, []); // Run only once on component mount


  return (
    <div>
        <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: 'url("/farmer.jpg")'}}>
      <div className="absolute m-14 top-1/4 left-1/5 transform -translate-y-1/2 text-left px-8">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl text-white font-light leading-tight mb-8">
  A Digital Identity <br/>
  <span className="mr-2 pt-4">for Every</span>  <br/>
  <span className="mr-2 text-green-600 font-bold">{farmerText}</span><br/>
</h1>

        <p className="text-lg text-white mb-8 mt-[5rem]">
          Introducing {"India's"} first digital agriculture directory, reimagining the industry with data-driven <br/> solutions for procurement, crop planning, and targeted marketing.
        </p>
        <button className="px-6 py-3 mt-[2rem] bg-white text-black rounded-full font-light hover:text-white hover:bg-green-600 transition duration-300 ease-in-out">
          View Coverage
        </button>
      </div>
    </div>
    </div>
  )
}
