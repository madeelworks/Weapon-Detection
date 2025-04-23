import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#4F2A7F] to-black py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          
          {/* Right Section: Text */}
          <div className="w-full md:w-7/12 lg:w-7/12 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 text-white">Private Investigation Services</h1>

            <p className="mt-6 text-white text-base ">
              We are experts in helping you find a solution to your problem. Our team includes <br /> male & female investigators possessing many years of experience. There are very <br /> few situations that we haven’t seen before, and more importantly, whatever your <br /> circumstances we are here to understand your situation.
            </p>

            <p className="mt-4 text-white text-base ">
              Developers working with React are constantly learning and improving, as the framework evolves with each release, offering new features and better performance. This commitment to innovation and improvement fosters a community where developers share knowledge and collaborate to create the best possible user experiences. By harnessing React's full potential, passionate developers can craft applications that are both visually appealing and functionally robust, meeting the needs of users worldwide.
            </p>

            <div className="mt-6">
              <a
                href="/contact"
                className="bg-red-500 text-white px-8 py-3 rounded-full text-xl hover:bg-red-600"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Left Section: Image */}
          <div className="w-full md:w-6/12 lg:w-6/12 flex justify-center">
            <img
              src="/src/assets/Home1.jpg"
              alt="React development"
              className="w-full lg:w-256 xl:w-320 h-full object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
