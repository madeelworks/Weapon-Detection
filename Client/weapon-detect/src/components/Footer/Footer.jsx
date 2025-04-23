import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white bg-gradient-to-r from-[#482566]   to-black mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-6 py-8">
        <div className="md:flex md:justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 px-6 relative z-10">
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              className="w-36 h-auto"
            />
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Resources */}
            <div>
              <ul className="text-gray-300 font-medium">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Home</h2>
                <li className="mb-4">
                  <a
                    href="/#home"
                    className="text-sm font-semibold text-white hover:text-blue-400 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/about"
                    className="text-sm font-semibold text-white hover:text-blue-400 transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/contact"
                    className="text-sm font-semibold text-white hover:text-blue-400 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/services"
                    className="text-sm font-semibold text-white hover:text-blue-400 transition duration-300"
                  >
                    Our Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <ul className="text-gray-300 font-medium">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Help</h2>
                <li className="mb-4">
                  <a
                    href="/home"
                    className="text-sm font-semibold text-white hover:text-blue-400 transition duration-300"
                  >
                    Support center
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/about"
                    className="text-sm font-semibold text-white hover:text-blue-400 transition duration-300"
                  >
                    How to start?
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/#about"
                    className="text-sm font-semibold text-white hover:text-blue-400 transition duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/#about"
                    className="text-sm font-semibold text-white hover:text-blue-400 transition duration-300"
                  >
                    Terms Of Use
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow Us</h2>
              <ul className="text-white-300 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/muhammad-adeel-953245257/?originalSubdomain=pk"
                    className="hover:text-blue-400 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/muhammad-adeel-953245257/?originalSubdomain=pk"
                    className="hover:text-blue-400 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Threads
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-white-700 sm:mx-auto lg:my-8" />

        {/* Footer Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white-400 sm:text-center">
            &copy; 2025 Adeel & Shakir. All Rights Reserved.
          </span>

          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="https://wa.me/923987654321"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="26"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              <span className="sr-only">whatsapp</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-adeel-953245257/?originalSubdomain=pk"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Threads</span>
            </a>
            <a
              href="mailto:adeel.tech@gmail.com"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="26"
                fill="currentColor"
                class="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
              <span className="sr-only">E-mail</span>
            </a>
            <a
              href="https://www.google.com/maps?q=Islamabad+Sports+Complex,+Islamabad+Capital+Territory"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="26"
                fill="currentColor"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              <span className="sr-only">Location</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
