import React from 'react';

export default function About() {
  return (
    <div>
      {/* First Section */}
      <section className="relative bg-black text-white py-20 px-10 bg-gradient-to-r from-[#4F2A7F] to-black">
  <div className="text-center mb-16 mt-12">
    <h2 className="text-4xl font-bold text-red-600">
      Get To Know <span className="text-white">Who We Are ?</span>
    </h2>
    <p className="mt-4 text-lg text-white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et
      egestas adipiscing lacinia.
    </p>
  </div>

  {/* Description Section */}
  <div className="text-center mt-12 mb-16">
    <p className="mt-4 text-lg text-white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia. Accumsan molestie enim, risus, at et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et
      egestas adipiscing lacinia.
    </p>
  </div>

  {/* Call to Action Button */}
  <div className="text-center">
    <a href="#contact" className="py-3 px-6 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
      Get In Touch
    </a>
  </div>

  {/* Grid Section for Images */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
    {/* First Image */}
    <div className="relative">
      <img
        src="/src/assets/service1.png" // Replace with your actual image path
        alt="About Us"
        className="w-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex justify-center items-center text-center">
        <p className="text-2xl font-bold text-white">Lorem ipsum dolor sit amet</p>
      </div>
    </div>

    {/* Second Image */}
    <div className="relative">
      <img
        src="/src/assets/service2.png" // Replace with your actual image path
        alt="About Us"
        className="w-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex justify-center items-center text-center">
        <p className="text-2xl font-bold text-white">Lorem ipsum dolor sit amet</p>
      </div>
    </div>

    {/* Third Image */}
    <div className="relative">
      <img
        src="/src/assets/service3.png" // Replace with your actual image path
        alt="About Us"
        className="w-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex justify-center items-center text-center">
        <p className="text-2xl font-bold text-white">Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  </div>
</section>


      {/* Second Section */}
      <section className="relative bg-black text-white py-20 px-10 bg-gradient-to-r from-[#4F2A7F] to-black">
  {/* Upper Section: Title and Description */}
  <div className="text-center mb-16 mt-12">
    <h2 className="text-4xl font-bold text-red-600">
      We Make People <span className="text-white">Feel Safe</span>
    </h2>
    <p className="mt-4 text-lg text-white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin
      integer in malesuada in et egestas adipiscing lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia.
    </p>
  </div>

  {/* Flex Section with Grid */}
  <div className="flex flex-col md:flex-row justify-between mt-12 mb-16">
    {/* Left Section - Description */}
    <div className="md:w-1/2 text-center mb-12 md:mb-0">
      <p className="mt-4 text-lg text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin
        integer in malesuada in et egestas adipiscing lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia.
      </p>
      <div className="text-center mt-10">
    <a href="#contact" className="py-3 px-6 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
      Contact Us
    </a>
  </div>
    </div>
     {/* Call to Action Button */}
 

    {/* Right Section - Grid of Boxes */}
    <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 pl-16">
  {/* Box 1 */}
  <div className="relative bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-all duration-300">
    <div className="text-red-600 mb-4">
      <img 
        src="/src/assets/About7.png"  // Replace with the actual path to your image
        alt="Image 1"
        className="w-full h-auto rounded-lg"
      />
    </div>
    <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h3>
    <p className="mt-2 text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in.
    </p>
  </div>

  {/* Box 2 */}
  <div className="relative bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-all duration-300">
    <div className="text-red-600 mb-4">
      <img 
        src="/src/assets/About8.png"  // Replace with the actual path to your image
        alt="Image 2"
        className="w-full h-auto rounded-lg"
      />
    </div>
    <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h3>
    <p className="mt-2 text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in.
    </p>
  </div>

  {/* Box 3 */}
  <div className="relative bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-all duration-300">
    <div className="text-red-600 mb-4">
      <img 
        src="/src/assets/About9.png"  // Replace with the actual path to your image
        alt="Image 3"
        className="w-full h-auto rounded-lg"
      />
    </div>
    <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h3>
    <p className="mt-2 text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in.
    </p>
  </div>
</div>

  </div>

  

 
</section>





    </div>
  );
}
