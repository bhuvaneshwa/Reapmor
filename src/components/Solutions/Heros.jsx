import SecHero from "./SecHero";

export default function Heros() {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800 my-5 mx-10">
        <div>
          <div className="container flex flex-col items-center mx-auto   md:p-1 md:px-12">
            <h1 className=" xs:text-3xl text-center xs:px-2 font-semibold md:text-4xl lg:text-3xl text-black mt-8 mb-4 ">
              Reimagine business, with data
            </h1>
            <hr className="w-full border-t border-gray-300 my-4" />
            <h1
              className="p-4 text-lg xs:text-lg md:text-xl lg:text-xl lg:mx-[10rem] xl:mx-[10rem] text-center font-normal"
              style={{ lineHeight: "2.25rem" }}
            >
              Our aim is to provide easy-to-use tools which can transform your
              company and drive growth through data driven solutions
            </h1>
            <hr className="w-full border-t border-gray-300 my-4" />

            
          </div>
        </div>

        <SecHero/>
      </section>
    </div>
  );
}
