import React from 'react'
// import background4 from '../../images/map01.webp'
import DeliveryAppCard from './Features/DeliveryAppCard'


const DeliveryApp = () => {
  return (
    <React.Fragment>
        <section className='w-full relative isolate bg-map bg-center bg-cover bg-no-repeat'>
            <div className='mx-auto max-w-[1560px] py-16 px-6'>
                <div>
                    <div className='py-16 px-4'>
                       <DeliveryAppCard/>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default DeliveryApp