import React from 'react'
import IndividualBookPage from './IndividualBookPage'
import AddBookForm from '../components/AddBookForm'
import { useNavigate } from 'react-router-dom'


const CheifPage = () => {

  const navigate = useNavigate();

  const addBookOnClick = () => {
    navigate('/add-book')
  }

  const individualBook = () => {
    navigate('/individualbookpage')
  }

  return (
    <div>
      <div className="flex justify-center p-2">
        <div className="flex items-center bg-blue-200 text-white px-4 py-3 rounded-xl shadow-sm gap-3">
          <i className="ri-search-line text-2xl"></i>

          <input
            type="text"
            placeholder="Search book here..."
            className="w-full bg-transparent focus:outline-none placeholder-white/70 text-white text-lg"
          />
                

        </div>
        
        <button onClick={addBookOnClick} className='bg-blue-500 p-2 px-2 rounded-xl text-white active:scale-95 m-2'> < i class="ri-add-large-line"></i>
        Add New Book</button>
            
      </div>

      <div className='flex gap-2 p-4 overflow-x-auto'>
        <button className='bg-blue-500 rounded-3xl text-center px-3 py-2 text-white font-medium'>All</button>

        <button className='bg-transparent border border-blue-500 rounded-3xl text-center px-3 py-2 text-black'>Philoshopy</button>

        <button className='bg-transparent border border-blue-500 rounded-3xl text-center px-3 py-2 text-black'>Philoshopy</button>

        <button className='bg-transparent border border-blue-500 rounded-3xl text-center px-3 py-2 text-black'>Philoshopy</button>

        <button className='bg-transparent border border-blue-500 rounded-3xl text-center px-3 py-2 text-black'>Philoshopy</button>

        <button className='bg-transparent border border-blue-500 rounded-3xl text-center px-3 py-2 text-black'>Philoshopy</button>

        <button className='bg-transparent border border-blue-500 rounded-3xl text-center px-3 py-2 text-black'>Philoshopy</button>

      </div>

      {/* cards */}

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-2 gap-4'>

        <div onClick={individualBook} className=' border w-[280px] p-3 rounded-xl'>
          <img
           className='w-[260px] h-[150px] mb-2 object-cover rounded-lg'
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bookImg" />
          <div className='text-gray-500 tracking-tight'>
            <p className=''>Name: <span className='text-black font-medium'>Milk and Honey</span></p>
            <p className=''>Author: <span className='text-black font-medium'>Gaurnaga</span></p>
            <p className=''>Status: <span className='text-black font-medium'>Available</span></p>
            <p className=''>Category: Health</p>
          </div>
        </div>
        
  

      </div>

    </div>

  )
}

export default CheifPage