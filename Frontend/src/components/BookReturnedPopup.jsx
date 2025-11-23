import React from 'react'

const BookReturnedPopup = () => {
  return (
    <div className='bg-amber-300 rounded-xl w-[250px] flex justify-between p-3 m-2 text-white'>
        <div className='rounded-full bg-amber-50 text-amber-300 w-10 flex items-center justify-center'>
            <i className="ri-refund-fill text-2xl"></i>
        </div>
        <div>
            <h3>
                Book Returned
            </h3>
            <p>Book Has been Returned</p>
        </div>
    </div>
  )
}

export default BookReturnedPopup