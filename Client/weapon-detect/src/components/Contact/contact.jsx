import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating form submission (Replace with actual API call)
    setTimeout(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-[#4F2A7F] to-black py-28">
      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-gradient-to-r from-[#482566] to-black rounded-lg shadow-lg p-6 md:p-10 gap-8">
        {/* Left Section - Get in Touch */}
        <div className="w-full md:w-1/3 bg-gradient-to-r from-[#482566] to-black rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold text-white mb-4 px-12 mt-6">   Get in touch:</h2>
        
          {/* Address */}
          <div className="flex items-start mb-4 mt-8">
            <div className="bg-blue-100 p-3 rounded-full">
            <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-white-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
            </div>
            <p className="ml-4 text-white ">Office address Islamabad Sports Complex, Islamabad Capital Territory</p>
          </div>
          {/* Phone */}
          <div className="flex items-start mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
            <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-white-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
            </div>
            <p className="ml-4 text-white "><br></br>+92 987654321</p>
          </div>
          {/* Email */}
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full">
            <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-white-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
            </div>
            <p className="ml-4 text-white "><br></br>adeel.tech@gmail.com</p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-white text-black  "
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-white text-black  "
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-white text-black  "
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-6 text-green-400 text-center">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;