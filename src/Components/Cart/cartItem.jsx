import React from 'react'

const CartItem = ({item, incrementQuantity, decrementQuantity, removeFromCart}) => {
  return (
    <React.Fragment>
      <div className='relative w-full sm:h-64  border rounded-md flex flex-col sm:flex-row'>
        <div className='h-64 sm:h-full sm:w-80'>
          <img src={item.image} alt={item.menu_name} className='w-full h-full object-cover rounded-lg sm:rounded-l-lg p-1'/>
        </div>

        <div className='p-4 w-full flex flex-col justify-around gap-2'>
          <div className='flex justify-between items-center'>
            <h3 className='font-bold text-3xl capitalize'>{item.menu_name}</h3>
            <button className='border p-2 rounded-md bg-yellow-400 font-semibold' onClick={() => removeFromCart(item)}>Remove Item </button>
          </div>

          <div className='flex gap-2'>
            <p className='font-bold mb-1'>Price: </p>
            <h4 className='font-bold text-gray-500'>Ksh {item.prices * item.quantity}</h4>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-bold'>Description: </p>
            <h4 className='font-bold text-gray-500'>{item.description}</h4>
          </div>

          <div>
            <p className='font-bold mb-1'>Quantity: </p>
            <div className='flex '>
              <button className='h-6 w-6 font-bold bg-yellow-400 rounded-md border flex items-center justify-center' onClick={() => decrementQuantity(item)}>-</button>
              <span className='mx-2 font-bold'>{item.quantity}</span> 
              <button className='h-6 w-6 font-bold bg-yellow-400 rounded-md border flex items-center justify-center' onClick={() => incrementQuantity(item)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartItem
