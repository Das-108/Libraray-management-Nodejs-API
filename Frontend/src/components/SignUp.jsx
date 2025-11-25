import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../api/axiosInstance';


const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const REGISTER_ENDPOINT ='/user/register';

  const handleSignUp = async (e) => {
    e.preventDefault();

    setLoading(true)
    setError(null)
    
    try {
      const payload = {username, password}

      const response = await axiosInstance.post(REGISTER_ENDPOINT, payload)

      const token = response.data.token

      if(!token) {
        throw new Error ('Register successful, but token was not recevied.')       
      }

      localStorage.setItem('token', token);
      alert('Registration Successful! redirectiing to the library.');

      navigate('/cheifpage')
    }catch(error) {
      console.error('Registration Failed: ', error)

      setError(error.response?.data?.msg || 'Registration failed. please try again.')
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className='p-4 text-center'>
        <h1 className='font-bold text-2xl text-center text-black'>
            SignUp Form
        </h1>
        <form className='flex flex-col mb-4 mt-8 gap-3'
        onSubmit={handleSignUp}>
            <input
             className='border border-gray-600 rounded-2xl p-4' 
             type="text" 
             placeholder='Username'
             value={username}
             onChange={(e) => setUsername(e.target.value)}
            />

            <input
             className='border border-gray-600 rounded-2xl p-4' 
             type="password" 
             placeholder='Password'
             value={password}
             onChange={(e) => setPassword(e.target.value)} 
            />
          <button
           className='bg-blue-500 px-4 p-2 rounded-xl text-white'
           type='submit'
           disabled={loading}
          >
            {loading ? 'Processing...': 'Sign Up'}
          </button>
        </form>

       <div className='flex justify-center gap-1 mt-4'>
        <p className='text-gray-600'>
          Already a member?          
        </p>
        <span className='text-blue-600 font-medium hover:text-blue-800'>
          <Link to='/'>Login Now</Link>
        </span>
       </div>

    </div>
  )
}

export default SignUp