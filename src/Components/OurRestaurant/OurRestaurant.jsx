import React from 'react'
import Card from './features/Card'
import food1 from '../../images/food1.jpg'
import food2 from '../../images/food2.jpg'
import food3 from '../../images/food3.jpg'
import food4 from '../../images/food4.jpg'


const cardData = [
    {
        id: 1,
        image: food1,
        name: 'lorem ipsum',
        desc: 'lorem ipsum',
    },
        {
        id: 2,
        image: food2,
        name: 'lorem ipsum',
        desc: 'lorem ipsum',
    },
        {
        id: 3,
        image: food3,
        name: 'lorem ipsum',
        desc: 'lorem ipsum',
    },
        {
        id: 4,
        image: food4,
        name: 'lorem ipsum',
        desc: 'lorem ipsum',
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
                <h1 className='font-dancing text-4xl text-yellow-400'>Popular Dishes Of</h1>
                <h1 className='font-bold text-4xl'>Our Restaurant</h1>
            </div>
            <div className="ml-10">
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ipsum sint mollitia magni quaerat amet?Commodo Sed Egestas Egestas Fringilla Phasellus Faucibus Scelerisque Eleifend Donec. Porttitor Massa Id Neque Aliquam Vestibulum Morbi Blandit Cursus Risus. Orci Ac Auctor Augue Mauris Augue Neque Gravida In Aliquam.</p>
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