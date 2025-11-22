import React from 'react'

const UpdateBookDetails = () => {
  return (
    <div className='bg-blue-200 min-h-screen flex items-center justify-center'>
        <div className='border p-2 bg-white flex flex-col rounded-3xl  w-[400px]'>
          <h1 className='m-3 text-xl text-center font-bold'>
            Update Book Details
          </h1>
          <form className=' flex flex-col p-3 gap-3 justify-center items-center' action="">
            <input className='border border-gray-200 rounded-2xl p-2 w-2/3' type="text" placeholder='Book Name' />
            <input className='border border-gray-200 rounded-2xl p-2 w-2/3' type="text" placeholder='Author Name' />
            <input className='border border-gray-200 rounded-2xl p-2 w-2/3' type="text" placeholder='Categoty' />
            <div className='flex gap-2'>
              <p className='font-medium text-gray-500'>Status: </p>
              <input type="radio" name='status'/>
              <label for="Available"> Available</label>            
              <input type="radio" name='status'/>
              <label for="Borrwed"> Borrwed </label>
            </div>
            <button className='bg-blue-500 px-4 p-2 rounded-xl text-white'>Update Book</button>
          </form>
        </div>
    </div>
  )
}

export default UpdateBookDetails