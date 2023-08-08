import React from 'react'
import food1 from '../../images/food1.jpg'
import food2 from '../../images/food2.jpg'
import food3 from '../../images/food3.jpg'
import food4 from '../../images/food4.jpg'
import MenuCard from '../Menu/Features/MenuCard'

const menuData = [
  {
    id: 1,
    name: 'chapo beans',
    img: food1,
    price: 5

  },
   {
    id: 2,
    name: 'ugali ndengu',
    img: food2,
    price: 5

  },
   {
    id: 3,
    name: 'Pizza',
    img: food3,
    price: 5

  },
   {
    id: 4,
    name: 'beef',
    img: food4,
    price: 5

  },
   {
    id: 5,
    name: 'mokimo',
    img: food3,
    price: 5

  },
   {
    id: 6,
    name: 'githeri',
    img: food4,
    price: 5

  },
   {
    id: 7,
    name: 'shawarma',
    img: food1,
    price: 5

  },
   {
    id: 8,
    name: 'choma',
    img: food2,
    price: 5

  },

]

const OurMenu = () => {
      const menuCard = menuData.map((data) => (
        <MenuCard data={data} key={data.id}/>
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