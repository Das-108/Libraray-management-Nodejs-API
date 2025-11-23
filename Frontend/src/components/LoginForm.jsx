// src/components/LoginForm.jsx (Updated)

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Removed unused imports: signup, cheifpage
import axiosInstance from '../api/axiosInstance';


const LoginForm = () => {
    const navigate = useNavigate();

    // The state variable must match the key name expected by the backend controller (username)
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError(null);

        // Client-side check to prevent sending empty data (helps debug 400 errors)
        if (!username || !password) {
            setLoading(false);
            return setError('Please enter both email address and password.');
        }

        try {
            // Sends { username: value, password: value } to /api/v1/user/login
            const response = await axiosInstance.post('/user/login', { username, password }); 
            
            
            const token = response.data.token;

            if (!token) {
                // Backend responded 200 but failed to provide a token
                throw new Error("Login failed: Authentication token missing.");
            }
            
            localStorage.setItem('token' , token);

            navigate('/cheifpage');
        } catch (error) {
            console.error('Login Failed:', error);
            
            // Display the specific message returned by the server, or a generic one
            setError(error.response?.data?.msg || 'Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex justify-center min-h-screen items-center bg-gray-50'>
            <div className='bg-white text-gray-600 w-[450px] p-8 shadow-2xl rounded-xl flex justify-center flex-col'>
                <h1 className='font-bold text-3xl text-center text-black mb-6'>
                    Welcome Back
                </h1>            
                
                {/* Display Error Message */}
                {error && (
                    <div className='text-red-700 bg-red-100 border border-red-300 p-3 rounded-lg text-center mb-4'>
                        {error}
                    </div>
                )}

                <form className='flex flex-col mb-4 mt-4' onSubmit={handleLogin}>
                    <input 
                        className='border border-gray-400 rounded-lg p-3 mb-4 focus:border-blue-500 focus:ring-1' 
                        type="text" // Use type="email" for better mobile usability
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder='Email Address / Username' // Updated placeholder
                        required 
                    />
                    <input 
                        className='border border-gray-400 rounded-lg p-3 mb-1 focus:border-blue-500 focus:ring-1' 
                        type="password" 
                        placeholder='Password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    
                    <p className='text-blue-500 text-sm mb-4 text-right cursor-pointer hover:text-blue-700'>Forgot password?</p>

                    <button 
                        type='submit' 
                        className='bg-blue-600 hover:bg-blue-700 active:scale-[0.98] px-4 p-3 rounded-xl text-white font-semibold transition duration-150 disabled:opacity-50'
                        disabled={loading}
                    >
                        {loading ? 'Logging In...' : 'Login'}
                    </button>
                </form>
                
                <div className='flex justify-center gap-1 mt-4'>
                    <p className='text-gray-600'>
                        Not a member?
                    </p>
                    <span className='text-blue-600 font-medium hover:text-blue-800'> 
                        <Link to ="/signup">Signup Now</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LoginForm