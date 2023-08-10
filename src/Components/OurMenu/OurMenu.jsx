import React, { useEffect, useState } from 'react'
import MenuCard from '../Menu/Features/MenuCard'
import { useCart } from '../../utils/CartContext'

const OurMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/menus")
        .then((r) => r.json())
        .then((menu) => setMenu(menu))
  },[])

  const { cartDispatch } = useCart()

  const addToCart = product => {
    cartDispatch(
      {
        type: 'ADD_TO_CART',
        payload: product
      }
    )
  }

      const menuCard = menu.map((data) => (
        <MenuCard data={data} key={data.menu_id} addToCart={addToCart}/>
  ))
  return (
    <React.Fragment>
        <section className='w-full relative isolate'>
            <div className='mx-auto max-w-[1560px] px-6 py-6'>
                <h1 className='font-bold text-3xl'>Our Menu</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4'>   
                    {menuCard}
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default OurMenu