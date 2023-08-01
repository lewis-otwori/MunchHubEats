import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchMenuOpen) {
      searchInputRef.current.focus();
    }
  }, [isSearchMenuOpen]);

  const handleSearchIconClick = (e) => {
    e.stopPropagation();
    setIsSearchMenuOpen((prevState) => !prevState);
  };

  const handleSearchInputClick = (e) => {
    e.stopPropagation();
  };

  const handleBodyClick = () => {
    setIsSearchMenuOpen(false);
  };

  return (
    <React.Fragment>
      {/* Navbar */}
      <nav className='px-6 bg-opacity-70 py-8 bg-gray-900 text-gray-50'>
        <div className='flex items-center justify-between mx-auto max-w-[1560px]'>
          <div className='lg:flex lg:flex-1 hidden'>
            <ul className='flex items-center gap-4 font-bold text-xl'>
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Restaurants</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="flex lg:hidden ">
            <HiMenu className='h-6 w-6' />
          </div>
          <div className='flex'>
            <h1 className='font-bold text-2xl lg:text-3xl'>MunchHub</h1>
          </div>

          <div className='flex flex-1 justify-end gap-6'>
            {/* Search Icon */}
            <span onClick={handleSearchIconClick}>
              <FaSearch className='h-4 w-4' />
            </span>

            {/* Search Menu */}
            {isSearchMenuOpen && (
              <div className="search-menu" onClick={handleSearchInputClick}>
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                  ref={searchInputRef}
                />
              </div>
            )}

            {/* Other Icons */}
            <span><FaShoppingCart className='h-4 w-4' /></span>
            <span><CgProfile className='h-4 w-4' /></span>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
