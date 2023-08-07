import React from 'react'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'


const Layout = () => {
  return (
   <>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout