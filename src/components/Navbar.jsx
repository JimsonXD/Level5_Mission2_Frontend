import React, { useState } from 'react';
import Turnerslogo from '../assets/Turnerslogo.png';

const Navbar = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    return (
        <nav>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
                <div className="flex justify-between items-center mb-4 pt-4">
                    <div>
                        <img src={Turnerslogo} alt='Turners Logo' />
                    </div>
                    <div className='hidden md:flex flex-row gap-4'>
                        <p>LOGIN <i>OR</i> REGISTER</p>
                        <p>0800 887 637</p>
                        <p>Find Us</p>
                        <p>中文</p>
                    </div>
                </div>
            </div>
            <div className="hidden md:block bg-blue-600 py-4">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
                    <div className="flex justify-between">
                        <ul className="flex gap-8">
                            <li><a href="#" className="text-white px-4">Find a Car</a></li>
                            <li><a href="#" className="text-white px-4">How to Buy</a></li>
                            <li><a href="#" className="text-white px-4">Sell your Car</a></li>
                            <li className="relative">
                                <a href="#" className="sub-menu-trigger text-white" onClick={toggleSubMenu}>
                                    Finance &amp; Insurance
                                </a>
                                {showSubMenu && (
                                    <div className="sub-menu absolute top-9 left-0 bg-white shadow-md mt-2 py-2 border max-h-40 w-72">
                                        <a href="/Cars/finance-insurance/" target="_blank" rel="noopener noreferrer" className="text-gray-800 block px-4 text-base">Finance Information</a>
                                        <a href="/Cars/finance-insurance/car--personal-finance-application/" target="_blank" rel="noopener noreferrer" className="text-gray-800 block px-4 text-base">Apply Online for Finance</a>
                                        <a href="/Cars/finance-insurance/Business-Finance-Application/" target="_blank" rel="noopener noreferrer" className="text-gray-800 block px-4 text-base">Apply Online for Business Finance</a>
                                        <a href="/Cars/finance-insurance/car-insurance/" target="_blank" rel="noopener noreferrer" className="text-gray-800 block px-4 text-base">Car Insurance</a>
                                    </div>
                                )}
                            </li>
                            <li><a href="#" className="text-white px-4">Turners Subscription</a></li>
                        </ul>
                        <ul className="flex gap-8">
                            <li><a href="#" className="text-white">Auctions</a></li>
                            <li><a href="#" className="text-white">Services & Info</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
