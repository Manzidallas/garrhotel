import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative h-screen overflow-hidden" id="heading">
      <div className="bg-orange-500">
        <div className="py-4 gap-8 flex justify-between w-[82%] m-auto">
          <div className="flex gap-6">
            <div className="flex gap-2 items-center">
              <img src="mail.svg" alt="mail" className="w-5 h-5" />
              <a href="mailto:reservation@garrhotel.com">reservation@garrhotel.com</a>
            </div>
            <div className="flex gap-2 items-center">
              <img src="whatsapp.svg" alt="whatsapp" className="w-5 h-5" />
              <a href="tel:+250783831292">+(250)783 831 292</a>
            </div>
            <div className="flex gap-2 items-center">
              <img src="location.svg" alt="Location" className="w-5 h-5" />
              <a href="#">KG9 AV.52, Nyarutarama</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="facebook.com/#">
              <img src="facebook.svg" alt="" className="w-6 h-6" />
            </a>
            <a href="twitter.com/#">
              <img src="twitter.svg" alt="" className="w-6 h-6" />
            </a>
            <a href="youtube.com/#">
              <img src="youtube.svg" alt="" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div
        className={`z-10 w-full left-0 right-0 transition duration-300 z-20 ${
          isSticky ? "bg-white shadow-md fixed top-0" : "absolute"
        }`}
      >
        <div className="flex justify-between items-center w-[85%] py-5 m-auto">
          <img
            src="https://hotel.fdgafrica.com/wp-content/uploads/2024/08/logofinal-garr.webp"
            alt="Hotel logo"
            className="rounded-lg p-1"
          />

          {/* Hamburger Menu Icon for Mobile */}
          <div className="block md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul
            className={`flex gap-6 text-md font-semibold ${
              isSticky ? "text-black" : "text-white"
            } ${isMobileMenuOpen ? "block" : "hidden"} md:flex`}
          >
            <li className="hover:text-gray-400 cursor-pointer transition duration-300">Home</li>
            <li className="hover:text-gray-400 cursor-pointer transition duration-300">About us</li>
            <li className="hover:text-gray-400 cursor-pointer transition duration-300">Our rooms</li>
            <li className="hover:text-gray-400 cursor-pointer transition duration-300">Meeting venue</li>
            <li className="hover:text-gray-400 cursor-pointer transition duration-300">Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="relative w-full h-full">
        <div className=" inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute top-[29rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Experience Luxury & Comfort at Our Exquisite Hotel</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum
            iure recusandae quos eveniet neque aut molestias consequatur commodi
            laboriosam adipisci, reiciendis, obcaecati quo perspiciatis eius
            ullam quia eos natus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
