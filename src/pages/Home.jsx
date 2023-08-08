import React from 'react'
// import Header from '../Components/Header/Header';
import BodyHeader from '../Components/Header/BodyHeader';
import OurRestaurant from '../Components/OurRestaurant/OurRestaurant';
import Menu from '../Components/Menu/Menu';
import UniqueDining from '../Components/UniqueDining/UniqueDining';
import Discount from '../Components/Discount/Discount';
import Display from '../Components/Display/Display';
import DeliveryApp from '../Components/DeliveryApp/DeliveryApp';


const Home = () => {
  return (
    <React.Fragment>
      <header className='bg-hero bg-center bg-cover bg-no-repeat h-screen w-full relative isolate  bg-black'>
        {/* <Header/> */}
        <BodyHeader/>
      </header>
      <OurRestaurant/>
      <Menu/>
      <UniqueDining/>
      <Discount/>
      <Display/>
      <DeliveryApp/>
    </React.Fragment>
  )
}

export default Home