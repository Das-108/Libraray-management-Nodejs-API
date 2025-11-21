import React from 'react'

const SignUp = () => {
  return (
    <div className='p-4 text-center'>
        <h1 className='font-bold text-2xl text-center text-black'>
            SignUp Form
        </h1>
        <form className='flex flex-col mb-4 mt-8 gap-3' action="">
            <input className='border border-gray-600 rounded-2xl p-4' type="text" placeholder='Email Address' />
            <input className='border border-gray-600 rounded-2xl p-4' type="text" placeholder='Password' />
            <input className='border border-gray-600 rounded-2xl p-4' type="text" placeholder='Confirm password' />
        </form>
        <button className='bg-blue-500 px-4 p-2 rounded-xl text-white'>SignUp</button>

    </div>
  )
}

export default SignUp