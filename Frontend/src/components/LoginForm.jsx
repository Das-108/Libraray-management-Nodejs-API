import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signup from './SignUp'
import cheifpage from '../Pages/CheifPage'


const LoginForm = () => {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()

        const isLogin = true

        if (isLogin) {
            navigate('/cheifpage')
        }else {
            console.log('Login Failed')
        }
    }

  return (
    <div className='flex justify-center'>
        <div className='bg-white text-gray-600  w-[450px] h-[700px] p-6 flex justify-center flex-col'>
            <h1 className='font-bold text-2xl text-center text-black'>
                Login Form
            </h1>            

            <form className='flex flex-col mb-4 mt-8' onSubmit={handleLogin} action="">
                <input className='border border-gray-600 rounded-2xl p-4 mb-4' type="text" placeholder='Email Address' />
                <input className='border border-gray-600 rounded-2xl p-4 mb-1' type="text" placeholder='Password' />
                <p className='text-blue-500'>forgot password?</p>
                <button type='submit' className='bg-blue-500 active:scale-95 px-4 p-2 mt-3 rounded-xl text-white'>
                    Login
                </button>
            </form>
            
            <div className='flex justify-center flex-col gap-2'>
                
                <p>
                    Not a member?
                    <span className='text-blue-500'> 
                        <Link to ="/signup">Signup Now</Link>
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default LoginForm