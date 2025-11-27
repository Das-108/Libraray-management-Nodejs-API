import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../api/axiosInstance'


const IssueBook = () => {

  const navigate = useNavigate()
  const { id: bookId } = useParams() 

  const [userId, setUserId] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleIssueSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    if( !userId || !dueDate) {
      setIsSubmitting(false)
      return setError('Please enter the user ID and Due date.')
    }

    try {
      const payload = {
        userId,
        dueDate
      };

      const response = await axiosInstance.post(`/book/issue/${bookId}`, payload)

      alert(`Book successfully issued to user: ${userId}`)

      navigate(`/individualbookpage/${bookId}`);

    } catch (error) {
      console.error('Issue Failed:' , error)
      setError(error.response?.data?.msg || error.response?.data?.error || 'Failed to issue book.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-blue-200'>
       
         <form
          className='lg:w-[400px] sm:w-[350px] bg-white flex flex-col p-2 border-2 border-gray-200 rounded-2xl gap-4 items-center'
          onSubmit={handleIssueSubmit}  
        >
            <h1 className='font-bold text-xl'>
              Issue Book(ID : {bookId})
            </h1>

            { error && <p className='text-red-500 text-sm'> {error} </p>}

            <input
             className='border border-gray-200 rounded-2xl p-2 w-2/3'
              type="text"
              placeholder='Enter User ID(borrwer)'
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />

            <input
             className='border border-gray-200 rounded-2xl p-2 w-2/3'
              type="date"
              placeholder='Enter Author name'
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />

            <button
             className='bg-blue-500 px-4 p-2 rounded-xl text-white'
             type='submit'
             disabled= {isSubmitting}
            >
              { isSubmitting ? 'Processing...' : 'Issue Book'}
            </button>

            <button
              type='button'
              className='text-gray-500 hover:text-gary-700'
              onClick={() => navigate(`/individualbookpage/${bookId}`)}
            >
              Cancel
            </button>

        </form>
       
    </div>
  )
}

export default IssueBook