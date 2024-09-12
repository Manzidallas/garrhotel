import { react } from "react";



const Footer = () =>{
    return(
        <>
            <footer className="bg-black text-white py-10">
                <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
                    <div>
                        <a href="#" className="flex justify-center md:justify-start items-center space-x-2">
                        <img
                            src="https://hotel.fdgafrica.com/wp-content/uploads/2024/08/logofinal-garr.webp"
                            alt="Hotel logo"
                            className="rounded-lg p-1"
                        />
                        </a>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            <a href="#" className="text-white hover:text-orange-500 transition">
                                <img src="facebook.svg" className="w-5"/>
                            </a>
                            <a href="#" className="text-white hover:text-orange-500 transition">
                                <img src="twitter.svg" className="w-5"/>
                            </a>
                            <a href="#" className="text-white hover:text-orange-500 transition">
                                <img src="youtube.svg" className="w-5"/>
                            </a>
                        </div>
                    </div>
        
                    <div>
                        <h3 className="text-xl font-semibold text-orange-500 mb-4">Contact us</h3>
                        <div className="">
                            <a href="phone:(+250) 781-818-79" className="mb-2 block"><i className="fas fa-phone"></i> (+250) 781-818-791</a>
                            <a href="mailto:info@garrhotel.com" className="mb-2 block"><i className="fas fa-envelope"></i> info@garrhotel.com</a>
                            <a href="mailto:info@garrhotel.com" className="mb-2 block"><i className="fas fa-map-marker-alt"></i> KG9 AV.52, Nyarutarama</a>
                        </div>
                    </div>

        
                    <div>
                        <h3 className="text-xl font-semibold text-orange-500 mb-4">References</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-orange-500 transition">Return Policy</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition">Terms and Conditions</a></li>
                        </ul>
                    </div>

       
                    <div>
                        <h3 className="text-xl font-semibold text-orange-500 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-orange-500 transition">Our Rooms</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition">Contact Us</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition">Our Services</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-800 pt-6">
                    <p className="text-center text-sm text-gray-400">© 2024 Garr Hotel. All rights reserved.</p>
                </div>
            </footer>

        </>

    )


}

export default Footer;