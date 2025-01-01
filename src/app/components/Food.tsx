import React from 'react';
import Image from 'next/image';
const FoodAndDrinks=()=>{
return(
    <div className="className='flex flex-col md:flex-row ml-10 h-[800px] mt-10">
        <div>
            <h1 className='text-xl md:text-4xl font-bold  md:text-left text-gray-800'>Food and Drinks</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {['Biryani', 'Karahi', 'Niharii', 'Dal Chawal','Rotii','Roh-Afzah','Milk Shake','Chai-Tea'].map((item, idx) => (
              <div key={idx} className="w-full">
                <Image
                  src={`/images/${item}.jpg`}
                  height={400}
                  width={400}
                  alt={item}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg shadow-blue-600 p-4"
                />
                <div className="mt-4 text-[#2A254B]">
                  <p className="py-2">{item === 'chair' ? 'The Dendy Chair' : ` ${item}`}</p>
                 
                </div>
              </div>
            ))}
          </div>

        </div>
        </div>
)
}
export default FoodAndDrinks
// import React from 'react';
// import Image from 'next/image';

// const FoodAndDrinks = () => {
//   return (
//     <div className="flex flex-col md:flex-row mx-6 my-10 p-4">
//       {/* Left Section */}
//       <div className="flex-1 mb-8 md:mb-0 md:w-1/2">
//         <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
//           Food and Drinks
//         </h1>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
//           {['Biryani', 'Karahi', 'Niharii', 'Dal Chawal', 'Rotii', 'Roh-Afzah', 'Milk Shake', 'Chai-Tea'].map(
//             (item, idx) => (
//               <div key={idx} className="w-full">
//                 <Image
//                   src={`/images/${item}.jpg`}
//                   height={400}
//                   width={400}
//                   alt={item}

// className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
//                 />
//                 <div className="mt-4 text-[#2A254B]">
//                   <p className="py-2 text-center">{item}</p>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>

//       {/* Right Section (Optional for description, etc.) */}
//       <div className="flex-1 hidden md:block md:w-1/2">
//         {/* Additional Content or Image for larger screens */}
//       </div>
//     </div>
//   );
// };

// export default FoodAndDrinks;