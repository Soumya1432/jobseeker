import React from 'react'
import heroImage from '../../assets/images/Meeting-pana.png'
import { Search } from 'lucide-react'
const HeroSection = () => {
  return (
    <div>
      <section className="text-gray-900body-font">
  <div className="container mx-auto flex px-4 py-20 md:mr-10 mr-8 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-3/4 mb-6 md:mb-0">
    <div className=''></div>
      <img
        className="object-cover object-center rounded "
        alt="hero"
        src={heroImage}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-blue-700">
        Find your dream job here
      </h1>
      <p className="mb-8 leading-6">
        Identify verify and let's get start o n your job portal, Get your dream job here
        where we can update verify and build on latest successfull job searching platform
      </p>
      <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
          <label
            htmlFor="hero-field"
            className="leading-7 text-sm text-gray-700"
          >
            Search your job here
          </label>
          <input
            type="text"
            id="hero-field"
            name="hero-field"
            className="w-full bg-gray-200 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <Search/>
          
        </button>
      </div>
      <p className="text-sm mt-2 text-gray-500  w-full">
       Get jobs update keep searching
      </p>
    
    </div>
  </div>
</section>

    </div>
  )
}

export default HeroSection
