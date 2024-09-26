import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaUser, FaStore, FaSearch, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CategoryStrip from './CategoryStrip';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <>
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          
          <Link to="/" className="flex items-center space-x-2">
          <div className="text-3xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 text-transparent bg-clip-text animate-gradient">
            SJ
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm text-gray-600">Style</span>
            <span className="text-sm text-gray-600">Jewellers</span>
            <div className="w-full border-t border-gray-300 mt-1"></div>
          </div>
        </Link>


          {/* Search Bar for larger screens */}
          <div className="flex-grow mx-4 justify-center hidden md:flex">
            <div className="relative w-1/2 max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered w-full pl-10"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Icons for larger screens */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex flex-col items-center text-gray-600 hover:text-gold-500 transform hover:scale-110 transition-transform duration-200">
              <Link to="/wishlist">
                <FaHeart size={24} />
              </Link>
              <span className="text-xs">Wishlist</span>
            </div>
            <div className="flex flex-col items-center text-gray-600 hover:text-gold-500 transform hover:scale-110 transition-transform duration-200">
              <Link to="/cart">
                <FaShoppingCart size={24} />
              </Link>
              <span className="text-xs">Cart</span>
            </div>
            <div className="flex flex-col items-center text-gray-600 hover:text-gold-500 transform hover:scale-110 transition-transform duration-200">
              <Link to="/login">
                <FaUser size={24} />
              </Link>
              <span className="text-xs">Account</span>
            </div>
            <div className="flex flex-col items-center text-gray-600 hover:text-gold-500 transform hover:scale-110 transition-transform duration-200">
              <Link to="/stores">
                <FaStore size={24} />
              </Link>
              <span className="text-xs">Stores</span>
            </div>
          </div>

          {/* Dropdown Menu and Icons for mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setIsSearchVisible(!isSearchVisible)} className="text-gray-600 hover:text-gold-500 transform hover:scale-110 transition-transform duration-200">
              <FaSearch className="text-lg" />
            </button>
            <Link to="/cart" className="text-gray-600 hover:text-gold-500 transform hover:scale-110 transition-transform duration-200">
              <FaShoppingCart className="text-lg" />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gold-500 transform hover:scale-110 transition-transform duration-200">
              <FaBars className="text-lg" />
            </button>
          </div>
        </div>

        {/* Search Bar for mobile */}
        {isSearchVisible && (
          <div className="md:hidden p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered w-full pl-10"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        )}

        {/* Dropdown Menu Content */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md p-4">
            <div className="flex flex-col space-y-4">
              <Link to="/wishlist" className="flex items-center text-gray-600 hover:text-gold-500">
                <FaHeart className="text-lg mr-2" />
                <span>Wishlist</span>
              </Link>
              <Link to="/login" className="flex items-center text-gray-600 hover:text-gold-500">
                <FaUser className="text-lg mr-2" />
                <span>Account</span>
              </Link>
              <Link to="/stores" className="flex items-center text-gray-600 hover:text-gold-500">
                <FaStore className="text-lg mr-2" />
                <span>Stores</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Category Strip */}
      <CategoryStrip />
    </>
  );
}

export default Navbar;