import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout/BaseLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./Components/LogIn/Login";
import Sign from "./Components/Sign/Sign";
import AddRestaurant from "./Components/AddRestaurant/AddRestaurant";
import Cart from "./Components/Cart/Cart";
import OurMenu from "./Components/OurMenu/OurMenu";




function App() {
 
  const router = createBrowserRouter( 
   createRoutesFromElements(
    <Route path="/" element = {<Layout/>}>
    <Route index element= {<Home />}/>
    <Route path="/contact" element = {<Contact/>}/>
    <Route path="/about" element = {<About/>}/>
    <Route path="login" element = {<Login/>}/>
    <Route path="sign" element = {<Sign/>}/>
    <Route path="addyourrestaurant" element ={<AddRestaurant/>}/>
    <Route path="cart" element = {<Cart/>}/>
    <Route path="our-menu" element = {<OurMenu/>}/>
    </Route>
   ) 
  )
  return (<RouterProvider router={router}/>)
}

export default App;
