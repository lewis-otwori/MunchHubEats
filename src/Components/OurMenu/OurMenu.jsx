import React from 'react'
import MenuCard from '../Menu/Features/MenuCard'

const OurMenu = ({menu}) => {
      const menuCard = menu.map((data) => (
        <MenuCard data={data} key={data.id} name = {data.menu_name} image = {data.image} price ={data.prices}/>
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