import { useState, useEffect } from 'react';

const Header = () => {
  const slides = [
    {
      title: 'Twin Rooms',
      description: 'Discover your perfect getaway in our elegantly designed Standard Rooms. All at an unbeatable price. Book now and make your stay unforgettable!',
      features: [
        'Spacious & comfortable twin beds',
        'Free Wi-Fi',
        'Ensuite modern bathroom',
        'Complimentary breakfast',
        '24-hour room service',
      ],
      imageUrl: 'https://example.com/image1.jpg',
    },
    {
      title: 'Deluxe Rooms',
      description: 'Experience luxury at its finest with our Deluxe Rooms, complete with premium amenities for a truly memorable stay.',
      features: [
        'King-size bed',
        'Free high-speed Wi-Fi',
        'Ensuite with Jacuzzi',
        'Complimentary dinner',
        'Personal butler service',
      ],
      imageUrl: 'https://example.com/image2.jpg',
    },
    {
      title: 'Family Suites',
      description: 'Perfect for families, our spacious suites offer the ultimate comfort with multiple rooms and ample living space.',
      features: [
        'Multiple rooms for family',
        'Kitchenette and dining area',
        'Private balcony',
        'Children’s play area',
        '24-hour security',
      ],
      imageUrl: 'https://example.com/image3.jpg',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsTransitioning(true);  // Start transition
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setIsTransitioning(false);  // End transition
      }, 500);  // Short delay to handle transition
    }, 5000);  // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <header className="header h-[100vh] border border-black">
      <div className="text-white bg-gray-200 z-10 w-full left-0 right-0 backdrop-blur-md" id="heading">
        <div className="flex justify-between items-center w-[85%] py-6 m-auto">
          <img
            src="https://hotel.fdgafrica.com/wp-content/uploads/2024/08/logofinal-garr.webp"
            alt="Hotel logo"
            className="rounded-lg p-1"
          />

          <ul className="flex gap-6 text-md text-black font-semibold">
            <li className="hover:text-gray-400 cursor-pointer transition duration-300">Home</li>
            <li className="hover:text-gray-400 cursor-pointer transition duration-300">About us</li>
            <li className="hover:text-gray-400 cursor-pointer transition duration-300">Our rooms</li>
            <li className="hover:text-gray-400 cursor-pointer transition duration-300">Meeting venue</li>
            <li className="hover:text-gray-400 cursor-pointer transition duration-300">Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="w-full m-auto overflow-hidden h-[750px] relative">
        {/* Background image with fade-in/out transition */}
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-[1500ms] ease-in-out  ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}

        >
          <img
            src={slides[currentSlide].imageUrl}
            className="w-full h-full object-cover"
            alt="Hotel Landscape"
          />
        </div>

        {/* Text content with slide and fade transition */}
        <div
          className={`z-10 relative mt-[10rem] md:ml-[8rem] w-[410px] justify-center flex flex-col text-left p-8 bg-gray-100 text-black rounded-xl transition-transform duration-500 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}
        >
          <h1 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h1>
          <p className="max-w-lg text-lg">{slides[currentSlide].description}</p>
          <ul className="list-disc list-inside text-gray-500 text-md mt-4">
            {slides[currentSlide].features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className="mt-6 px-8 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300">
            Book now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
