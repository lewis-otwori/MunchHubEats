import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiMiniBars3BottomLeft} from "react-icons/hi2";
import { Link } from 'react-router-dom';
import Registration from '../Registration/Registration';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <React.Fragment>
                  {/* navbar */}
            <nav
            className='px-6  bg-opacity-70 py-8 bg-gray-50 text-gray-950'
            > 
                <div className='flex items-center justify-between mx-auto max-w-[1560px]'>
                    {/* <div className='lg:flex lg:flex-1 hidden' >
                        <ul className='flex items-center gap-4 font-bold text-xl'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/sign">SignUp</a></li>
                            <li><a href="/addyourrestaurant">Add your restaurant</a></li>
                        </ul>
                    </div> */}
                    <div className="flex lg:hidden ">
                      <HiMiniBars3BottomLeft className='h-6 w-6'/>  
                    </div>
                    <div className='flex'>
                        <h1 className='font-bold text-2xl lg:text-3xl'>MunchHub</h1>
                    </div>

                    <div className='flex flex-1 justify-end gap-10'>
                        <span><FaSearch className=' h-6 w-6'/></span>
                        <Link to='/Cart'>
                        <span><FaShoppingCart className=' h-6 w-6'/></span>
                        </Link>
                        <span>
                          <Link 
                          onClick={handleOpen}
                          to='/'>
                            
                            <CgProfile className=' h-6 w-6'/>
                          </Link>
                          <span className={`${isOpen ? 'flex' : 'hidden'} absolute z-50 right-3 top-24`}> 
                            <Registration/>
                          </span>
                        </span>
                    </div>
                </div>
            </nav>

    </React.Fragment>
  )
}

export default Header