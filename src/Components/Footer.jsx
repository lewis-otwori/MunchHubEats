import React from 'react';
import { BiRestaurant } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="bg-[#d2a297] dark:bg-gray-900">
      <div className="mx-auto w-full max-w-[1560px] p-4 py-8 lg:py-12">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <a href="https://Munchhub.com/" className="flex items-center">
              <span><BiRestaurant className="h-6 w-6" /></span>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MunchHub</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Overview</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Contact Us</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">About Us</a>
                </li>
                {/* ... Add more items */}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline">Facebook</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Twitter</a>
                </li>
                {/* ... Add more social media links */}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-12" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; 2023 <a href="https://flowbite.com/" className="hover:underline">Munchhub&trade;</a>. All Rights Reserved.</span>
          <div className="flex mt-4 space-x-4 sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 8 19">
                {/* ... Facebook icon path */}
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 17">
                {/* ... Twitter icon path */}
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
