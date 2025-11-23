import React from 'react'

const BookDeletedPop = () => {
  return (
    <div className='bg-red-500 rounded-xl flex justify-between p-3 text-white w-[250px] m-2'>
        <div className='bg-red-50 rounded-full flex items-center w-10 justify-center'>
            <i className="ri-delete-bin-6-fill text-2xl text-red-500"></i>
        </div>
        <div>
            <h3>File Deleted</h3>
            <p>Book has been deleted!</p>
        </div>
    </div>
  )
}

export default BookDeletedPop