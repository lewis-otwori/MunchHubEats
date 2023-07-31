import React from 'react'
import { FaSearch, FaShoppingCart, } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiMiniBars3BottomLeft} from "react-icons/hi2";



const Header = () => {
  return (
    <React.Fragment>
                  {/* navbar */}
            <nav
            className='px-6  bg-opacity-70 py-8 bg-gray-900 text-gray-50'
            > 
                <div className='flex items-center justify-between mx-auto max-w-[1560px]'>
                    <div className='lg:flex lg:flex-1 hidden' >
                        <ul className='flex items-center gap-4 font-bold text-xl'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="flex lg:hidden ">
                      <HiMiniBars3BottomLeft className='h-6 w-6'/>  
                    </div>
                    <div className='flex'>
                        <h1 className='font-bold text-2xl lg:text-3xl'>MunchHub</h1>
                    </div>

                    <div className='flex flex-1 justify-end gap-6'>
                        <span><FaSearch className=' h-4 w-4'/></span>
                        <span><FaShoppingCart className=' h-4 w-4'/></span>
                        <span><CgProfile className=' h-4 w-4'/></span>
                    </div>
                </div>
            </nav>

    </React.Fragment>
  )
}

export default Header