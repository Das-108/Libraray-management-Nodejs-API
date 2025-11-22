import React from 'react'

const IssueBook = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-blue-200'>
       
         <form className='lg:w-[400px] sm:w-[350px] bg-white flex flex-col p-2 border-2 border-gray-200 rounded-2xl gap-4 items-center' action="">
            <h1 className='font-bold text-xl'>
                Issue Book
            </h1>
            <input className='border border-gray-200 rounded-2xl p-2 w-2/3' type="text" placeholder='Enter Book Name' />
            <input className='border border-gray-200 rounded-2xl p-2 w-2/3' type="text" placeholder='Enter Author name'/>
            <button className='bg-blue-500 px-4 p-2 rounded-xl text-white'>Issue Book</button>
        </form>
       
    </div>
  )
}

export default IssueBook