import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout/BaseLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";



function App() {
  const router = createBrowserRouter( 
   createRoutesFromElements(
    <Route path="/" elements = {<Layout/>}>
    <Route index element= {<Home/>}/>
    <Route path="/contact" elements = {<Contact/>}/>
    <Route path="/about" elements = {<About/>}/>
    </Route>
   ) 
  )
  return (<RouterProvider router={router}/>)
}

export default App;
