import React from 'react'
import MenuItem from './Features/MenuItem'
import food1 from '../../images/food1.jpg'
import food2 from '../../images/food2.jpg'
import food3 from '../../images/food3.jpg'
import food4 from '../../images/food4.jpg'

const menudata = [
    {
        id: 1,
        name: 'Risotto',
        desc:'In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Amet luctus venenatis.',
        img: food1
    },
      {
        id: 2,
        name: 'Baked Beans',
        desc: 'Semper feugiat nibh sed pulvinar. Magnis dis parturient montes nascetur ridiculus.',
        img: food2
    },
      {
        id: 3,
        name: 'Chessy bacon',
        desc: 'Faucibus et molestie ac feugiat sed lectus. Commodo ullamcorper a lacus vestibulum sed.',
        img:food3
    },
      {
        id: 4,
        name: 'Frozen Fruit',
        desc: 'Gres tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis..',
        img: food4
    },
      {
        id: 5,
        name: 'Mixed Salad',
        desc: 'Risus viverra adipiscing at in tellus integer feugiat scelerisque. Imperdiet nulla malesuada.',
        img:food1
    },
      {
        id: 6,
        name: 'Salmon Tacos',
        desc: 'Dignissim convallis aenean et tortor at risus viverra adipiscing. Elementum tempus sed.',
        img: food2
    },
]


const UniqueDining = () => {

    const dataMenuItem = menudata.map((menu) => (
    <MenuItem menu={menu} key={menu.id}/>

    ))
  return (
    <React.Fragment>
       <section className='w-full relative isolate'>
            <div className='mx-auto max-w-[1560px] px-6 '>
                <div className='flex  flex-col justify-center items-center gap-4'>
                    <h1 className='font-dancing text-4xl text-yellow-400 capitalize'>our</h1>
                    <h2 className='font-semibold text-5xl capitalize'>popular dishes</h2>
                </div>
                {/* menu items */}

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 my-6'>
                  {dataMenuItem}
                </div>
            </div>
       </section>
    </React.Fragment>
  )
}

export default UniqueDining