import React from 'react'
import Card from './features/Card'
import food1 from '../../images/naivas.jpeg'
import food2 from '../../images/java.jpeg'
import food3 from '../../images/kfc.jpeg'
import food4 from '../../images/chickeninn.jpeg'


const cardData = [
    {
        id: 1,
        image: food1,
        name: 'Naivas',
    },
        {
        id: 2,
        image: food2,
        name: 'Java House',
    },
        {
        id: 3,
        image: food3,
        name: 'KFC',
    },
        {
        id: 4,
        image: food4,
        name: 'chicken inn',
    },
]

const OurRestaurant = () => {

    const restaurantCard = cardData.map((data) => (
        <Card data={data} key={data.id}/>
    ))
  return (
    <React.Fragment>
    <section className=' w-full relative isolate '>
      <div className='mx-auto max-w-[1560px] py-16 px-6'>
        <div className="flex flex-col md:flex-row">
            <div className="text-2xl gap-10 flex-shrink-0">
                <h1 className='font-dancing text-4xl text-yellow-400 capitalize'>Top restaurants and more in</h1>
                <h1 className='font-bold text-5xl capitalize' >Kenya</h1>
            </div>
            <div className="ml-10">
                <p className='text-lg '>Welcome to our delivery restaurant! We're here to satisfy your cravings with convenience and flavor, all delivered right to your doorstep. Discover a delectable array of dishes crafted with care by our skilled chefs. Whether you're in the mood for comforting classics or daring new flavors, we've got something to tantalize every taste bud.</p>
            </div>
        </div>


        {/* cards */}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4 gap-4'>
            {restaurantCard}
        </div>
      </div>
    </section>
    </React.Fragment>
  )
}

export default OurRestaurant