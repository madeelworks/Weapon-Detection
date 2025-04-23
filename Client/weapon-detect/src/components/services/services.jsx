import React, { Component } from 'react';

export class Services extends Component {
  render() {
    return (
      <div>
        <section className="bg-black text-white py-20 px-10 bg-gradient-to-r from-[#4F2A7F] to-black">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-600">
              How We Provide <span className="text-white">Our Services</span>
            </h2>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="service-item bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="/src/assets/Service1.png"
                alt="Effective"
                className="w-full h-58 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-red-600">Effective</h3>
              <p className="text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia.
              </p>
            </div>
            <div className="service-item bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="/src/assets/Service2.png"
                alt="Professional"
                className="w-full h-58 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-red-600">Professional</h3>
              <p className="text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia.
              </p>
            </div>
            <div className="service-item bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="/src/assets/Service3.png"
                alt="Diverse"
                className="w-full h-58 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-red-600">Diverse</h3>
              <p className="text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia.
              </p>
            </div>
          </div>
        </section>

        {/* section for service types */}
        <section className="bg-black text-white py-20 px-10 bg-gradient-to-r from-[#4F2A7F] to-black">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-600">
              Take A Look At <span className="text-white">Services We Provide</span>
            </h2>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. Proin integer in malesuada in et egestas adipiscing lacinia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="service-item bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="/src/assets/Service4.png" 
                alt="Private Investigation Services"
                className="w-20 h-20 object-cover rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-red-600">Private Investigation Services</h3>
              <p className="text-gray-400 mt-2">
                We can help you find legal and efficient solutions to your problems using expert private investigators.
              </p>
              <button className="mt-4 bg-red-600 text-white py-2 px-6 rounded-md">Know More</button>
            </div>
            <div className="service-item bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="/src/assets/Service5.png" 
                alt="Personal Investigation Services"
                className="w-20 h-20 object-cover rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-red-600">Personal Investigation Services</h3>
              <p className="text-gray-400 mt-2">
                Personal affairs, missing family members, and matrimonial investigations. Affordable and legal.
              </p>
              <button className="mt-4 bg-red-600 text-white py-2 px-6 rounded-md">Know More</button>
            </div>
            <div className="service-item bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="/src/assets/Service6.png" 
                alt="Armed Security Guard"
                className="w-20 h-20 object-cover rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-red-600">Armed Security Guard</h3>
              <p className="text-gray-400 mt-2">
                We assess each client’s security needs and match skilled professional security officers to accommodate their requirements.
              </p>
              <button className="mt-4 bg-red-600 text-white py-2 px-6 rounded-md">Know More</button>
            </div>
            <div className="service-item bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="/src/assets/Service7.png" 
                alt="Event Security"
                className="w-20 h-20 object-cover rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-red-600">Event Security</h3>
              <p className="text-gray-400 mt-2">
                NSG Security Services have operated event security services at events and venues from small to large scale.
              </p>
              <button className="mt-4 bg-red-600 text-white py-2 px-6 rounded-md">Know More</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
