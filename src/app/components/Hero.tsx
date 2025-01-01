import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="font-[sans-serif] bg-white py-8 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold md:!leading-[55px] text-gray-700">
          Welcome to Travel and Adventure Pakistan
        </h2>
        <p className="mt-6 text-sm md:text-base leading-relaxed text-gray-600">
          Pakistan, a country nestled in the heart of South Asia, is a treasure trove of breathtaking landscapes, rich cultural heritage, and warm hospitality.
          From the majestic mountains of the north to the serene beaches of the south, Pakistan is a destination that will leave you enchanted and inspired.
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Image 1 */}
        <div className="w-full md:w-[500px] h-auto group">
          <Image
            src={"/images/hero2.jpg"}
            height={800}
            width={800}
            alt="mountains"
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 shadow-lg shadow-blue-600 p-4"
          />
          <div className="mt-4 text-[#2A254B]">
             
             <p className="">Pakistan's lush green valleys, a sight to behold, where nature's beauty never grows old.</p>
             </div>
        </div>
        

        {/* Image 2 */}
        <div className="w-full md:w-[500px] h-auto group">
          <Image
            src={"/images/nathia.png"}
            height={800}
            width={800}
            alt="mountains"
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 shadow-lg shadow-blue-600 p-4"
          />
          <div className="mt-4 text-[#2A254B]">
             
             <p className="">The snow-capped peaks of the Karakoram, a winter wonderland, where snowflakes gently fall and dreams unfold</p>
             </div>
        </div>

        {/* Image 3 */}
        <div className="w-full md:w-[500px] h-auto group">
          <Image
            src={"/images/hero3.jpg"}
            height={800}
            width={800}
            alt="mountains"
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 shadow-lg shadow-blue-600 p-4"
          />
          <div className="mt-4 text-[#2A254B]">
             
             <p className="">The land of the pure, where green mountains meet blue skies, and the beauty of nature touches the heart's eyes.</p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
