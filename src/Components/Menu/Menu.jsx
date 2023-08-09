import React from 'react'
import MenuCard from "./Features/MenuCard.jsx"
import food1 from '../../images/food1.jpg'
import food2 from '../../images/food2.jpg'
import food3 from '../../images/food3.jpg'
import food4 from '../../images/food4.jpg'
import { useCart } from '../../utils/CartContext.js'
// const menuData = [
//   {
//     id: 1,
//     name: 'chapo beans',
//     img: food1,
//     price: 5

//   },
//    {
//     id: 2,
//     name: 'ugali ndengu',
//     img: food2,
//     price: 5

//   },
//    {
//     id: 3,
//     name: 'Pizza',
//     img: food3,
//     price: 5

//   },
//    {
//     id: 4,
//     name: 'beef',
//     img: food4,
//     price: 5

//   },
//    {
//     id: 5,
//     name: 'mokimo',
//     img: food3,
//     price: 5

//   },
//    {
//     id: 6,
//     name: 'githeri',
//     img: food4,
//     price: 5

//   },
//    {
//     id: 7,
//     name: 'shawarma',
//     img: food1,
//     price: 5

//   },
//    {
//     id: 8,
//     name: 'choma',
//     img: food2,
//     price: 5

//   },

// ]

const Menu = () => {
    const { cartDispatch } = useCart();

    const addToCart = (product) => {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    };


  const menuCard = menuData.map((data) => (
        <MenuCard data={data} key={data.id} addToCart={addToCart}/>
  ))

  return (
    <React.Fragment>
        <section className=' w-full relative isolate '>
            <div className='mx-auto max-w-[1560px] py-16 px-6'>
                <div className="flex flex-col justify-center items-center gap-4" >
                    <h1 className='font-dancing text-3xl text-yellow-400 capitalize'>yammy & delicious</h1>
                    <h2 className='font-semibold text-6xl '>our Menu</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4">
                    
                   {menuCard}
                </div>
            </div>
       </section>
    </React.Fragment>
  )
}

export default Menu