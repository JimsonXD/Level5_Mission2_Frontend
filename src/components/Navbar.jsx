import React from 'react';
import Turnerslogo from '../assets/Turnerslogo.png'
import { useState } from 'react';

const Navbar = () => {


    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    return (
        <nav>
            <div className="container mx-auto flex flex-col py-4">

                {/* NavTop */}
                <div className="bg-white text-blue-500 mb-4 px-20">
                    <ul className='flex flex-row gap-4'>
                        <li>Cars</li>
                        <li className="border border-gray-500 border-y-0 px-2">Turners</li>
                        <li>Subscription</li>
                        <li className="border border-gray-500 border-y-0 px-2">Trucks & Machinery</li>
                        <li>Damaged & End of Life</li>
                        <li className="border border-gray-500 border-y-0 px-2">Motorcycles</li>
                        <li>General Goods</li>
                        <li className="border border-gray-500 border-y-0 border-r-0  px-2">Buses, Caravans & Motorhomes</li>
                    </ul>
                </div>

                {/* NavMid */}
                <div className="flex justify-between mb-4 pt-4">
                    <div>
                        <img src={Turnerslogo} alt='Turners Logo' />
                    </div>
                    <div className='flex flex-row gap-4'>
                        <p>LOGIN <i>OR</i> REGISTER</p>
                        <p>0800 887 637</p>
                        <p>Find Us</p>
                        <p>中文</p>
                    </div>
                </div>
            </div>

            {/* NavBot */}
            <div className="hidden md:flex gap-8 flex justify-between bg-blue-600 py-4 px-20">

                <ul className="flex gap-8">
                    <li>
                        <a href="#" className="text-white px-4">
                            Find a Car
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white px-4">
                            How to Buy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white px-4">
                            Sell your Car
                        </a>
                    </li>
                    <li className="relative">
                        <a href="#" className="sub-menu-trigger text-white" onClick={toggleSubMenu}>
                            Finance &amp; Insurance
                        </a>
                        {showSubMenu && (
                            <div className="sub-menu absolute top-9 left-0 bg-white shadow-md mt-2 py-2 border max-h-40 w-72">
                                {/* Sub-menu content */}
                                <a href="/Cars/finance-insurance/" target="_blank" title="Finance Information" data-href="/Cars/finance-insurance/" className="text-gray-800 block px-4 text-base">
                                    Finance Information
                                </a>
                                <a href="/Cars/finance-insurance/car--personal-finance-application/" target="_blank" data-href="/Cars/finance-insurance/car--personal-finance-application/" className="text-gray-800 block px-4 text-base">
                                    Apply Online for Finance
                                </a>
                                <a href="/Cars/finance-insurance/Business-Finance-Application/" target="_blank" title="Apply Online for Business Finance" data-href="/Cars/finance-insurance/Business-Finance-Application/" className="text-gray-800 block px-4 text-base">
                                    Apply Online for Business Finance
                                </a>
                                <a href="/Cars/finance-insurance/car-insurance/" target="_blank" title="Car Insurance" data-href="/Cars/finance-insurance/car-insurance/" className="text-gray-800 block px-4 text-base">
                                    Car Insurance
                                </a>
                            </div>
                        )}
                    </li>
                    <li>
                        <a href="#" className="text-white px-4">
                            Turners Subscription
                        </a>
                    </li>
                </ul>
                <ul className="flex gap-8">
                    <li>
                        <a href="#" className="text-white">
                            Auctions
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white">
                            Services & Info
                        </a>
                    </li>
                </ul>
            </div>





        </nav>
    );
};

export default Navbar;


