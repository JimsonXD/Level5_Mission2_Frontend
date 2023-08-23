import React from 'react';
import Turnerslogo from '../assets/Turnerslogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Navbar = () => {


    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    return (
    <nav>
      <div className="">
        {/* NavTop */}
        <div className="flex justify-center bg-white w-90 text-sm text-turnersblue font-turners">
          <ul className="flex flex-row mb-5">
            <li className="my-3 mx-1 hover:text-black transition-colors duration-700">Cars</li>
            <li className="my-3 mx-1 px-2 border border-lightgrey border-y-0 hover:text-black transition-colors duration-700">Turners Subscription</li>
            <li className="my-3 mx-1 hover:text-black transition-colors duration-700">Trucks & Machinery</li>
            <li className="my-3 mx-1 px-2 border border-lightgrey border-y-0 hover:text-black transition-colors duration-700">Damaged & End of Life</li>
            <li className="my-3 mx-1 hover:text-black transition-colors duration-700">Motorcycles</li>
            <li className="my-3 mx-1 px-2 border border-lightgrey border-y-0  hover:text-black transition-colors duration-700">General Goods</li>
            <li className="my-3 mx-1 hover:text-black transition-colors duration-700">Buses, Caravans & Motorhomes</li>
          </ul>
        </div>
        {/* NavMid */}
        <div className="flex justify-between w-90 mb-7">
          <div className="mx-10">
            <img src={Turnerslogo} alt="Turners Logo" />
          </div>
          <div className="flex justify-center mx-12 my-2">
            <p className="text-sm text-turnersblue font-semibold mx-5">
              <a href="http://www.turners.co.nz" className="mx-1 hover:text-turnersred transition-colors duration-700">
                LOGIN
              </a>
              <span className="text-sm text-turnersgrey font-medium italic">OR</span>
              <a href="http://www.turners.co.nz" className="mx-1 hover:text-turnersred transition-colors duration-700">
                REGISTER
              </a>
            </p>
            <p className="text-sm text-black font-semibold mx-5 hover:text-turnersred transition-colors duration-700">0800 887 637</p>
            <p className="text-sm text-black font-semibold mx-5 hover:text-turnersred transition-colors duration-700">Find Us</p>
            <p className="text-sm text-black text-turnersred font-semibold">中文</p>
          </div>
        </div>

        {/* NavBot */}
        <div className="flex justify-between bg-turnersblue py-3">
          <ul className="flex">
            <li>
              <a href="http://www.turners.co.nz" className="text-white font-semibold ml-12 mr-6">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xs" className="text-white stroke-2 mr-2 group-hover:text-white transition-colors duration-700" />
                Find a Car
              </a>
            </li>
            <li>
              <a href="http://www.turners.co.nz" className="text-white font-semibold mx-6">
                How to Buy
              </a>
            </li>
            <li>
              <a href="http://www.turners.co.nz" className="text-white font-semibold mx-6">
                Sell your Car
              </a>
            </li>
            <li className="relative">
              <a href="http://www.turners.co.nz" className="sub-menu-trigger text-white font-semibold mx-6" onClick={toggleSubMenu}>
                Finance & Insurance
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
                  <a
                    href="/Cars/finance-insurance/Business-Finance-Application/"
                    target="_blank"
                    title="Apply Online for Business Finance"
                    data-href="/Cars/finance-insurance/Business-Finance-Application/"
                    className="text-gray-800 block px-4 text-base"
                  >
                    Apply Online for Business Finance
                  </a>
                  <a href="/Cars/finance-insurance/car-insurance/" target="_blank" title="Car Insurance" data-href="/Cars/finance-insurance/car-insurance/" className="text-gray-800 block px-4 text-base">
                    Car Insurance
                  </a>
                </div>
              )}
            </li>
            <li>
              <a href="http://www.turners.co.nz" className="text-white font-semibold mx-6">
                Turners Subscription
              </a>
            </li>
          </ul>
          <ul className="flex">
            <li>
              <a href="http://www.turners.co.nz" className="text-white font-semibold mx-6">
                Auctions
              </a>
            </li>
            <li>
              <a href="http://www.turners.co.nz" className="text-white font-semibold ml-6 mr-12">
                Services & Info
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
