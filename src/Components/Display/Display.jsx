import React from 'react'
import food1 from '../../images/food1.jpg'

const Display = () => {
  return (
    <React.Fragment>
        <section className='w-full relative isolate'>
            <div className='mx-auto max-w-[1560px] px-6 py-6'>
                <div className='flex gap-6 flex-col sm:flex-row'>

                    <div className='h-[450px] w-full overflow-hidden'>
                        <img src={food1} alt="" />
                       
                    </div>
                    <div className='h-[450px] w-full space-y-3 p-5 overflow-hidden '>
                        <h1 className='font-dancing text-yellow-400 text-5xl capitalize'>shack</h1>
                        <h2 className='font-semibold text-4xl'>Mexican Tacos With Beef</h2>
                        <h3 className='text-3xl font-semibold'>$3.00</h3>
                            <div className='flex items-center justify-between'>
                                <h1 className='w-36'>Quantity</h1>
                                <div className='flex items-center gap-4 w-full'>
                                    <button type='button' className='border p-2'>Small</button>
                                    <button type='button' className='border p-2'>Medium</button>
                                </div>
                            </div>
                             <div className='flex items-center justify-between'>
                                <h1 className='w-36'>Cuisines</h1>
                                <div className='flex items-center gap-4 w-full'>
                                    <button type='button' className='border p-2'>Italian</button>
                                    <button type='button' className='border p-2'>Chines</button>
                                    <button type='button' className='border p-2'>Spanish</button>
                                </div>
                            </div>
                             <div className='flex items-center justify-between '>
                                <h1 className='w-36'>Type</h1>
                                <div className='flex items-center w-full'>
                                    <button type='button' className='border p-2'>Non-Veg</button>
                                </div>
                            </div>
                            <div className='flex items-center justify-between gap-2'>
                                <div className='flex items-center border p-1 gap-8'>
                                    <button className=' p-2' type='button'>-</button>
                                    <span>3</span>
                                    <button type='button' className='p-2'>+</button>
                                </div>
                                <div className='flex items-center w-full justify-center border p-3 bg-yellow-300'>
                                    <button type='button' className='w-full'>unavailable</button>
                                </div>
                            </div>
                            <button type='buttton' className='w-full p-3 items-center justify-center border bg-yellow-300'>Buy It Now</button>
                    </div>
                </div>
            </div>
        </section>

    </React.Fragment>
  )
}

export default Display