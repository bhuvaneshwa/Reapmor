

function FarMartHero() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-row justify-between bg-white px-10 py-4">
        <h1 className="text-3xl font-bold">FarMart</h1>
        <div className="flex flex-row space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Solutions
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Life@FarMart
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Impact
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            About Us
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contact Us
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Blogs
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-full text-center space-y-10">
        <h2 className="text-5xl font-bold leading-tight">The Good Food Economy</h2>
        <p className="text-2xl text-gray-600">Meet the good food economy</p>
        <p className="text-xl font-light">
          We are an intelligent food network Building for the future of humanity.
        </p>
        <a href="#" className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md font-bold">
          About Us
        </a>
      </div>
    </div>
  )
}

export default FarMartHero
