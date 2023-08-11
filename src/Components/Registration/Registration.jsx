import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <React.Fragment>
        <div className='w-64 flex flex-col items-center justify-start bg-gray-900 p-4' >
            <div className='flex flex-col gap-3 '>
                <Link to="sign" className='flex items-center justify-center border rounded-md text-gray-50 py-1'>Sign Up</Link>
                <Link to='login' className='flex border rounded-md py-1 text-black bg-white items-center justify-center'>Log in</Link>
                <Link className='text-white' to="/">Create a business account</Link>
                <Link className='text-white' to="addyourrestaurant">Add your restaurant</Link>
                <Link className='text-white' to="/">Sign up to deliver</Link>
                <Link className='text-white' to="admin-panel">Admin dashboard</Link>

            </div>
        </div>

    </React.Fragment>
  )
}

export default Registration