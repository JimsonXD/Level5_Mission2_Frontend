import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer>
            <div className='top-footer bg-gray-500 text-white py-8 '>
                <div className="container mx-auto flex flex-row justify-between">
                    <div className="footer-section">
                        <h3 className="text-xl font-bold mb-4">CARS</h3>
                        <ul className="list-none">
                            <li>How to Buy</li>
                            <li>Sell Your Car</li>
                            <li>Finance & Insurance</li>
                            <li>Auctions & Events</li>
                            <li>Buyer & Seller Fees</li>
                            <li>Vehicle Sale Price History Tool</li>
                            <li>Shipping Costs</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="text-xl font-bold mb-4">FINANCE & INSURANCE</h3>
                        <ul className="list-none">
                            <li>Finance Homepage</li>
                            <li>Car & Personal Finance</li>
                            <li>Loan Calculator</li>
                            <li>Car Insurance</li>
                            <li>Mechanical Breakdown Insurance</li>
                            <li>General Insurances</li>
                            <li>Trucks Finance</li>
                            <li>Financial Information</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="text-xl font-bold mb-4">SEARCH FOR</h3>
                        <ul className="list-none">
                            <li>Cars</li>
                            <li>Trucks & Machinery</li>
                            <li>Damaged & End of Life Cars</li>
                            <li>Boats & Marine</li>
                            <li>Motorcycles & Scooters</li>
                            <li>General Goods</li>
                            <li>Buses, Caravans & Motorhomes</li>
                            <li>Turners Auction Schedule</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
                        <ul className="list-none">
                            <li>Overview</li>
                            <li>Turners Careers</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Turners Live</li>
                            <li>The Good Oil Blog</li>
                            <li>Email Alerts</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className="footer-section bg-gray-800 p-5 px-20 text-white">
                <div className="flex justify-between items-center">
                    <p className="text-white">&copy; 2022 Turners</p>

                    <ul className="flex space-x-4">
                        <li className="group flex items-center py-2 px-3 cursor-pointer">
                            <FontAwesomeIcon icon={faHouseChimney} size="lg" className="text-red-600 group-hover:text-white transition-colors duration-300" />
                            <span className="ml-2">Branch Details</span>
                        </li>
                        <li className="group flex items-center py-2 px-3 cursor-pointer">
                            <FontAwesomeIcon icon={faFacebookF} size="lg" className="text-red-600 group-hover:text-white transition-colors duration-300" />
                            <span className="ml-2">Facebook</span>
                        </li>
                        <li className="group flex items-center py-2 px-3 cursor-pointer">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-red-600 group-hover:text-white transition-colors duration-300" />
                            <span className="ml-2">Newsletter</span>
                        </li>
                        <li className="group flex items-center py-2 px-3 cursor-pointer">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-red-600 group-hover:text-white transition-colors duration-300" />
                            <span className="ml-2">Email Alerts</span>
                        </li>
                        <li className="group flex items-center py-2 px-3 cursor-pointer">
                            <FontAwesomeIcon icon={faInstagram} size="lg" className="text-red-600 group-hover:text-white transition-colors duration-300" />
                            <span className="ml-2">Instagram</span>
                        </li>
                    </ul>
                </div>
            </div>


        </footer>

    )
}


export default Footer;
