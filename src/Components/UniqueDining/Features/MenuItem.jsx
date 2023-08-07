import React from 'react'
// import food1 from '../../../images/food1.jpg'

const MenuItem = ({menu}) => {
  return (
    <React.Fragment>
            <div className='flex p-4 items-center justify-center '>
                <div className='w-full'>
                    <h1 className='font-bold capitalize '>{menu.name}</h1>
                    <p>{menu.desc}</p>
                </div>
                <div className=" ml-2">
                    <div className='flex h-32 w-32 rounded-full overflow-hidden'>
                        <img src={menu.img} alt="" className='h-full w-full object-cover' />
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}

export default MenuItem