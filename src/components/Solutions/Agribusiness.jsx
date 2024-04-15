import Footer from "../Footer";
import Heros from "./Heros";


export default function Agribusiness() {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-fixed bg-center flex justify-center items-center"
        style={{
          backgroundImage:
            'url("https://pbs.twimg.com/media/GCax7e8XUAAHnXE?format=jpg&name=large")',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-65"></div>

        <div className="absolute xs:pt-[25rem] xs:text-center xl:text-center lg:text-center xs:m-5 xs:mx-10 xs:text-xl sm:pt-40 sm:mx-0 xl:mx-1 sm:w-full w-4/5 m-24 top-1/4 transform -translate-y-1/2 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-1 ">
            <div className="w-full bg-red-800 relative flex justify-center items-center h-full">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="lg:text-xl xl:mt-28 text-white xl:mx-20 xs:leading-8">
                  {"''"}In the digital age, data is the most valuable asset for
                  agricultural businesses, enabling them to gain insights, make
                  informed decisions, and drive sustainable growth.{"''"}
                </p>
                <span className="block mt-4">- Adi Godrej</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Heros />
     

      <Footer />
    </div>
  );
}
