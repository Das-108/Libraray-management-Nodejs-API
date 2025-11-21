import React from 'react'

const LoginForm = () => {
  return (
    <div className='flex justify-center'>
        <div className='bg-white text-gray-600  w-[450px] h-[700px] p-6 flex justify-center flex-col'>
            <h1 className='font-bold text-2xl text-center text-black'>
                Login Form
            </h1>            

            <form className='flex flex-col mb-4 mt-8' action="">
                <input className='border border-gray-600 rounded-2xl p-4 mb-4' type="text" placeholder='Email Address' />
                <input className='border border-gray-600 rounded-2xl p-4 mb-1' type="text" placeholder='Password' />
                <p className='text-blue-500'>forgot password?</p>
            </form>
            
            <div className='flex justify-center flex-col gap-2'>
                <button className='bg-blue-500 px-4 p-2 rounded-xl text-white'>Login</button>
                <p>Not a member? <span className='text-blue-500'> <a href="#">Signup now</a></span></p>
            </div>
        </div>
    </div>
  )
}

export default LoginForm