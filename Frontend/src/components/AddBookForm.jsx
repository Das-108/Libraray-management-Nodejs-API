import React from 'react'

const AddBookForm = () => {
  return (
    <div className='flex items-center justify-center bg-blue-300 min-h-screen'>
        <div className='border-2 rounded-xl border-gray-50 bg-white w-[350px] h-auto p-4 text-center justify-center'>
            <h1 className='font-bold text-3xl mb-3'>
                Add a Book
            </h1>

            <form className=' gap-4 flex flex-col justify-center items-center p-2 mb-3' action="">
                <input className='border border-gray-200 rounded-2xl p-2 w-2/3' type="text" placeholder='Enter Book Name' />
                <input className='border border-gray-200 rounded-2xl p-2 w-2/3' type="text" placeholder='Enter Author Name' />
                <input className='border border-gray-200 rounded-2xl p-2 w-2/3' type="text" placeholder='Enter Cateory of books' />
            </form>

            <button className='bg-blue-500 px-4 p-2 rounded-xl text-white'>Add Book</button>

        </div>
    </div>
  )
}

export default AddBookForm