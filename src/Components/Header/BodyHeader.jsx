import React from 'react'

const BodyHeader = () => {
  return (
    <React.Fragment>
        {/* Body */}
        <section className='mx-auto max-w-[1560px] px-6'>
        <div className="flex items-start relative flex-col top-96 gap-10">
            <div className='flex'>
                <h1 className='text-7xl font-bold text-gray-50 text-center'>Food Delivery</h1>
            </div>
                <div className='flex'>
                <p className='text-lg text-gray-50 font-bold'>Savor a world of flavors at your doorstep with our delivery restaurant's exquisite offerings.</p>

                </div>

                <button  type='button' className=' p-2 bg-yellow-400 px-4  hover:bg-yellow-500 '>
                    Order Now
                </button>
        </div>
        </section>
    </React.Fragment>
  )
}

export default BodyHeader