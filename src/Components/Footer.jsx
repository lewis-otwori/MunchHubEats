import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-gradient-to-t from-red-900 to-red-700 py-12 text-white flex justify-center items-center">
      <div className="flex flex-col space-y-4">
        <NavLink
          to="/"
          exact
          className="font-bold text-2xl md:text-3xl lg:text-4xl text-white hover:text-yellow-400 transition duration-300 flex items-center space-x-2 animate-bounce"
        >
          <i className="fas fa-home text-yellow-400 text-lg md:text-xl lg:text-2xl"></i>
          Home
        </NavLink>
        <NavLink
          className="font-bold text-2xl md:text-3xl lg:text-4xl text-white hover:text-yellow-400 transition duration-300 flex items-center space-x-2 animate-bounce"
          to="/menu"
        >
          <i className="fas fa-book-open text-yellow-400 text-lg md:text-xl lg:text-2xl"></i>
          Menu
        </NavLink>
        <NavLink
          className="font-bold text-2xl md:text-3xl lg:text-4xl text-white hover:text-yellow-400 transition duration-300 flex items-center space-x-2 animate-bounce"
          to="/contact"
        >
          <i className="fas fa-envelope text-yellow-400 text-lg md:text-xl lg:text-2xl"></i>
          Contact Us
        </NavLink>
        {/* Add the "About Us" NavLink */}
        <NavLink
          className="font-bold text-2xl md:text-3xl lg:text-4xl text-white hover:text-yellow-400 transition duration-300 flex items-center space-x-2 animate-bounce"
          to="/about"
        >
          <i className="fas fa-info-circle text-yellow-400 text-lg md:text-xl lg:text-2xl"></i>
          About Us
        </NavLink>
        <p className="text-xs md:text-sm lg:text-base text-center">
          © 2023 MunchHubEats Restaurant. All rights reserved.
        </p>
        <p className="text-xs md:text-sm lg:text-base text-center">
          Address: 123 Main Street, City, Country
        </p>
        <p className="text-xs md:text-sm lg:text-base text-center">
          Phone: +1 (123) 456-7890 | Email: info@MunchHubEatssrestaurant.com
        </p>
        <div className="flex items-center justify-center space-x-4">
          <a
            href="https://www.facebook.com/deliciousrestaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            <i className="fab fa-facebook text-xl md:text-2xl lg:text-3xl"></i>
          </a>
          <a
            href="https://www.instagram.com/deliciousrestaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            <i className="fab fa-instagram text-xl md:text-2xl lg:text-3xl"></i>
          </a>
          <button
            onClick={handleScrollToTop}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded-full transition duration-300"
          >
            Scroll to Top
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
