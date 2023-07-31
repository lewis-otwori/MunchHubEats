import React from 'react'
import background4 from '../../images/background4.webp'

const Discount = () => {
  return (
    <React.Fragment>
        <section className=' w-full relative isolate'>
            <div className='mx-auto max-w-[1560px] py-16 px-6'>
                <div className='relative'>
                    <img src={background4} alt="" className='h-full w-full absolute object-cover' />
                    <div className='flex justify-center space-y-7 items-center flex-col border py-32 relative bg-black bg-opacity-70 text-center'>
                        <h1 className='font-dancing text-yellow-400 capitalize text-2xl'>upto 25% off</h1>
                        <h2 className='text-gray-50 text-bold text-4xl capitalize'>on italian, mexican, and indian cuisine</h2>
                        <p className='text-gray-50 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, suscipit iure? Vitae beatae distinctio rem.</p>
                        <button type='button' className=' p-2 bg-yellow-400 px-4  hover:bg-yellow-500'>Grab Your offer</button>
                    </div>
                </div>
            </div>
        </section>


    </React.Fragment>
  )
}

export default Discount