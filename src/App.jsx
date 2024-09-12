// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import Header from './Nav';
import Slideshow from './test';
import Footer from './Footer';
import Story from './story';



// const RoomCard = ({ title, description, price, image, icons }) 
function Home() {
  return (
    <>

    {/* <Header /> */}
     <Slideshow /> 

    
    <section className='py-12'>
      <div className='max-w-7xl mx-auto px-4 md:flex items-center md:gap-4'>
        <div className='md:w-1/2'>
          <h1 className='text-5xl font-semibold'>Welcome to <span className='text-orange-500'>Garr Hotel</span>, Kigali</h1>
          <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, modi exercitationem alias, neque maxime praesentium numquam ad repudiandae, sit mollitia quam ipsam beatae ullam voluptatum. In soluta dolores ipsa sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus soluta illum, maiores quae minima quos. Libero error obcaecati quo voluptatum autem, ullam minus, sint dicta corrupti, perspiciatis officiis vel?</p>
        </div>

        <div className="md:w-1/2 grid md:grid-cols-2 gap-3">
          <div className="p-4">
            <img src="dish.svg" alt="Free Self-Parking" className=" w-20 h-20 text-orange-500"/>
            <h1 className='text-2xl mt-4'>Tasty Cuisines </h1>
            <p className='text-gray-500 mt-2'>Come experience the unparalleled dining experience at Garr Hotel and indulge in our Tasty Cuisines.</p>
          </div>
          <div className="p-4">
            <img src="pool.svg" alt="Free Self-Parking" className=" w-20 h-20 text-orange-500"/>
            <h1 className='text-2xl mt-4'>Swimming Pool</h1>
            <p className='text-gray-500 mt-2'>Take a dip in the Garr Hotel pool and experience the ultimate in relaxation and luxury.</p>
          </div>
          <div className="p-4">
            <img src="bed.svg" alt="Free Self-Parking" className=" w-20 h-20 text-orange-500"/>
            <h1 className='text-2xl mt-4'> Room & Suites </h1>
            <p className='text-gray-500 mt-2'>Experience the ultimate in comfort and style with our Rooms and Suites at Garr Hotel</p>
          </div>
          <div className="p-4">
            <img src="star.svg" alt="Free Self-Parking" className=" w-20 h-20 text-orange-500"/>
            <h1 className='text-2xl mt-4'>Events</h1>
            <p className='text-gray-500 mt-2'>We promise to provide you with exceptional service and an unforgettable event experience.</p>
          </div>

          
        </div>
      </div>
    </section>

      

    <section className="py-12">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        The Most Memorable Rest Time Starts Here.
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="https://c4.wallpaperflare.com/wallpaper/686/52/945/luxurious-hotel-room-wallpaper-preview.jpg" alt="Deluxe Ocean View" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Deluxe Ocean View</h3>
            <p className="text-gray-600 mb-4">
              Bask in luxury with breathtaking ocean views from your private suite.
            </p>
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-bold">$299/night</p>
              <div className="flex space-x-2">
                {/* <img src="icon1.svg" alt="icon1" className="h-6 w-6" />
                <img src="icon2.svg" alt="icon2" className="h-6 w-6" />
                <img src="icon3.svg" alt="icon3" className="h-6 w-6" /> */}
              </div>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
              Book Now
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="https://hotel.fdgafrica.com/wp-content/uploads/2024/08/226819211.jpg" alt="Executive Cityscape Room" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Executive Cityscape Room</h3>
            <p className="text-gray-600 mb-4">
              Experience urban elegance and modern comfort in the heart of the city.
            </p>
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-bold">$199/night</p>
              <div className="flex space-x-2">
                {/* <img src="icon1.svg" alt="icon1" className="h-6 w-6" />
                <img src="icon2.svg" alt="icon2" className="h-6 w-6" />
                <img src="icon3.svg" alt="icon3" className="h-6 w-6" /> */}
              </div>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
              Book Now
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="https://i.pinimg.com/736x/e5/53/56/e553568217a584ac374fef18691f0b6d.jpg" alt="Family Garden Retreat" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Family Garden Retreat</h3>
            <p className="text-gray-600 mb-4">
              Spacious and inviting, perfect for creating cherished memories with loved ones.
            </p>
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-bold">$249/night</p>
              <div className="flex space-x-2">
                {/* <img src="icon1.svg" alt="icon1" className="h-6 w-6" />
                <img src="icon2.svg" alt="icon2" className="h-6 w-6" />
                <img src="icon3.svg" alt="icon3" className="h-6 w-6" /> */}
              </div>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
              Book Now
            </button>
          </div>
        </div>

      </div>
    </div>
    </section>

    <Story />


  <section className="py-12">
    <div className="max-w-7xl mx-auto px-4">


      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Hotel Amenities</h2>
        <p className="text-gray-500">Discover the services we offer</p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="p-6 bg-white shadow-sm rounded-lg text-center border cursor-pointer">
          <div className="mb-4">
            <img src="parking.svg" alt="Free Self-Parking" className="mx-auto w-12 h-12"/>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Free Self-Parking</h3>
          <p className="text-gray-500 mb-4">
            A hotel is an establishment that provides paid lodging on a short-term basis.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline hidden">Read More</a>
        </div>

        <div className="p-6 bg-white shadow-sm rounded-lg text-center border cursor-pointer">
          <div className="mb-4">
            <img src="internet.svg" alt="High Speed Internet" className="mx-auto w-12 h-12"/>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">High Speed Internet Access</h3>
          <p className="text-gray-500 mb-4">
            Facilities provided may range from modest to high-quality.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline hidden">Read More</a>
        </div>

        <div className="p-6 bg-white shadow-sm rounded-lg text-center border cursor-pointer">
          <div className="mb-4">
            <img src="wifi.svg" alt="Complimentary WiFi" className="mx-auto w-12 h-12"/>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Free Public WiFi </h3>
          <p className="text-gray-500 mb-4">
            Providing seamless access for all guests.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline hidden">Read More</a>
        </div>

        <div className="p-6 bg-white shadow-sm rounded-lg text-center border cursor-pointer">
          <div className="mb-4">
            <img src="elevator.svg" alt="Elevators" className="mx-auto w-12 h-12"/>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Elevators</h3>
          <p className="text-gray-500 mb-4">
            Providing convenient access to all floors.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline hidden">Read More</a>
        </div>

        <div className="p-6 bg-white shadow-sm rounded-lg text-center border cursor-pointer">
          <div className="mb-4">
            <img src="partners.svg" alt="Meeting Rooms" className="mx-auto w-12 h-12"/>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Meeting Rooms</h3>
          <p className="text-gray-500 mb-4">
            Equipped with modern technology for your events.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline hidden">Read More</a>
        </div>

       <div className="p-6 bg-white shadow-sm rounded-lg text-center border cursor-pointer">
          <div className="mb-4">
            <img src="washing-machine.svg" alt="Laundry Service" className="mx-auto w-12 h-12"/>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Laundry and Valet Service</h3>
          <p className="text-gray-500 mb-4">
            Keeping you looking sharp during your stay.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline hidden">Read More</a>
        </div>

      </div>
    </div>
  </section>


  <section className="px-4 py-12">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-8">
      <h1 className="text-3xl font-semibold">
        Delighted to have you here at <span className="text-orange-600 font-bold">Garr Hotel</span>
      </h1>
      <p className="text-gray-700">Treat yourself to a luxurious experience</p>
    </div>

    <div className="overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-nowrap relative">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[300px]">
          <img src="https://hotel.fdgafrica.com/wp-content/uploads/2024/08/resort10-1.jpg" alt="Standard Room" className="w-full h-40 object-cover" />
          <div className="p-6">
            <div className="flex justify-between items-center relative">
              <h2 className="text-lg font-semibold">Standard Room</h2>
              <div className="bg-orange-500 text-white text-center flex items-center justify-center rounded-full p-3 w-20 h-20 absolute right-0 mb-20">
                 <p>Start at $10.99</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>🌬️ Air Cooling</li>
              <li>📶 Wi-Fi</li>
              <li>🧹 Smart Ironing</li>
              <li>🛎️ 24/7 Room Service</li>
              <li>🌿 Garden Balcony</li>
            </ul>
            <button className="mt-4 bg-orange-500 text-white font-bold py-2 px-4 w-full rounded">
              Book Now
            </button>
          </div>
        </div>


        <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[300px]">
          <img src="https://hotel.fdgafrica.com/wp-content/uploads/2024/09/226831325.jpg" alt="Single Room" className="w-full h-40 object-cover" />
          <div className="p-6">
            <div className="flex justify-between items-center relative">
              <h2 className="text-lg font-semibold">Single Room</h2>
              <div className="bg-orange-500 text-white text-center flex items-center justify-center rounded-full p-3 w-20 h-20 absolute right-0 mb-20">
                 <p>Daily rate $10.99</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>🌬️ Air Cooling</li>
              <li>📶 Wi-Fi</li>
              <li>🧹 Smart Ironing</li>
              <li>🛎️ 24/7 Room Service</li>
              <li>🌿 Garden Balcony</li>
            </ul>
            <button className="mt-4 bg-orange-500 text-white font-bold py-2 px-4 w-full rounded">
              Book Now
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[300px]">
          <img src="https://hotel.fdgafrica.com/wp-content/uploads/2024/09/226831325.jpg" alt="Executive Room" className="w-full h-40 object-cover" />
          <div className="p-6">
            <div className="flex justify-between items-center relative">
              <h2 className="text-lg font-semibold">Executive Room</h2>
              <div className="bg-orange-500 text-white text-center flex items-center justify-center rounded-full p-3 w-20 h-20 absolute right-0 mb-20">
                 <p>Start at $10.99</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>🌬️ Air Cooling</li>
              <li>📶 Wi-Fi</li>
              <li>🧹 Smart Ironing</li>
              <li>🛎️ 24/7 Room Service</li>
              <li>🌿 Garden Balcony</li>
            </ul>
            <button className="mt-4 bg-orange-500 text-white font-bold py-2 px-4 w-full rounded">
              Book Now
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[300px]">
          <img src="https://hotel.fdgafrica.com/wp-content/uploads/2024/09/226831325.jpg" alt="Resort Room" className="w-full h-40 object-cover" />
          <div className="p-6">
            <div className="flex justify-between items-center relative">
              <h2 className="text-lg font-semibold">Resort Room</h2>
              <div className="bg-orange-500 text-white text-center flex items-center justify-center rounded-full p-3 w-20 h-20 absolute right-0 mb-20">
                 <p>Start at $10.99</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>🌬️ Air Cooling</li>
              <li>📶 Wi-Fi</li>
              <li>🧹 Smart Ironing</li>
              <li>🛎️ 24/7 Room Service</li>
              <li>🌿 Garden Balcony</li>
            </ul>
            <button className="mt-4 bg-orange-500 text-white font-bold py-2 px-4 w-full rounded">
              Book Now
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<Footer />
    </>
  );
}

export default Home;
