import React from "react";


const Story = () => {
    return(
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <h4 className="text-sm text-gray-500 uppercase tracking-wide mb-2">Our Story</h4>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Amazing place to enjoy your vacation</h2>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit aperiam itaque magnam natus. Quos quo, eligendi quia sunt corrupti, ab expedita perferendis animi nobis quas aperiam, praesentium voluptas maiores.</p>
                    <p className="text-gray-600 mb-6">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.</p>
                    <button className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Read More</button>
                </div>
                <div className="lg:w-1/2">
                    <img src="https://hotel.fdgafrica.com/wp-content/uploads/2024/09/226831325.jpg" alt="Vacation Image" className="rounded-lg shadow-lg object-cover w-full h-full"/>
                </div>
            </div>
        </section>
    )
}

export default Story;