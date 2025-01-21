import { useState } from 'react';
import logo from '../assets/logo.png';
import { FiSearch } from 'react-icons/fi';
import { FaQuestionCircle, FaRegUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <img 
          src={logo} 
          alt="Canada Lighting Experts" 
          className="h-12 sm:h-14 md:h-16 lg:h-18" 
        />

        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearchSubmit} className="flex items-center w-full sm:w-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search"
              className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="p-2 bg-white text-gray-700 rounded-r-md border border-gray-300 hover:bg-gray-100 focus:outline-none"
            >
              <FiSearch className="text-xl" />
            </button>
          </form>

          <div className="hidden sm:flex items-center bg-green-500 text-white px-4 py-4 ml-3 rounded-l-md">
            <span className="text-sm font-medium">Save up to 17%</span>
          </div>
        </div>

        <nav>
          <ul className="flex space-x-6 sm:space-x-8">
            <li className="flex flex-col items-center">
              <FaQuestionCircle className="text-lg text-gray-700 mb-1" />
              <a href="#home" className="text-gray-800 hover:text-blue-600">Support</a>
            </li>
            <li className="flex flex-col items-center">
              <FaRegUser className="text-lg text-gray-700 mb-1" />
              <a href="#shop" className="text-gray-800 hover:text-blue-600">Account</a>
            </li>
            <li className="flex flex-col items-center">
              <FaHeart className="text-lg text-gray-700 mb-1" />
              <a href="#about" className="text-gray-800 hover:text-blue-600">My Favorites</a>
            </li>
            <li className="flex flex-col items-center">
              <FaShoppingCart className="text-lg text-gray-700 mb-1" />
              <a href="#contact" className="text-gray-800 hover:text-blue-600">Your Cart</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="bg-[#CD5C5C] h-1 w-full"></div>
    </header>
  );
};

export default Header;
