import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../api/axiosInstance';

const UpdateBookDetails = () => {
  const navigate = useNavigate ();
  const { id } = useParams();

  const [book, setBook] = useState(null)
  const [author, setAuthor] = useState('')
  const [tittle, setTittle] = useState('')
  const [category, setCategory] = useState('')
  const [status, setStatus] = useState('Avialable')

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  useEffect (() => {
    const fetchBooksDetails = async () => {
      if (!id) {
        setError("Book ID is missing from the url")
        setLoading(false)
        return
      }
      try {
        const response = await axiosInstance.get('/book/${id}')
        const currentBook = response.data.book

        setBook(currentBook);
        setTittle(currentBook.tittle)
        setAuthor(currentBook.author)
        setCategory(currentBook.category)
        setStatus(currentBook.status || 'Available')

        setLoading(false)
      } catch (error) {
        console.error('Error fethching book details for update: ' , error)
        setError(error.response?.data?.msg || `Failed to load book for editing`);
        setLoading(false)
      }
    }
    fetchBooksDetails ();
  }, [id])

  const handleUpdateBook = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    if(!tittle || !author || !category || !status) {
      setIsSubmitting(false)
      return setError('Please fill in all required Fields.')
    }

    try {
      const payload = { tittle, author, category, status};

      const response = await axiosInstance.patch( `/book/${id}`, payload)

      alert(`Book "${response.data.book.tittle}" updated sucessfully`)

      navigate(`/individualbookpage/${id}`)
    } catch (error) {
      console.error('Update Failed:' ,error);
      setError(error.response?.data?.msg)      
    }finally {
      setIsSubmitting(false)
    }
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-red-600 font-bold">
        {error}

        <button
        onClick={() => navigate('/cheifpage')}
        className='mt-4 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800'
        >
          Go Back to List
        </button>

      </div>
    )
  }

  return (
    <div className='bg-blue-200 min-h-screen flex items-center justify-center'>
        <div className='border p-2 bg-white flex flex-col rounded-3xl  w-[400px]'>
          <h1 className='m-3 text-xl text-center font-bold'>
            Update Book Details
          </h1>
          <form
           className=' flex flex-col p-3 gap-3 justify-center items-center'
            onSubmit={handleUpdateBook}
          >

            <input
             className='border border-gray-200 rounded-2xl p-2 w-2/3'
              type="text"
              placeholder='Book Name' 
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
              required
            />

            <input
             className='border border-gray-200 rounded-2xl p-2 w-2/3' type="text"
              placeholder='Author Name'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />

            <input
             className='border border-gray-200 rounded-2xl p-2 w-2/3' 
             type="text" 
             placeholder='Category'
             value={category}
             onChange={(e) => setCategory(e.target.value)}
             required
            />

            <div className='flex gap-2'>
              <p className='font-medium text-gray-500'>Status: </p>

              <input 
                type="radio" 
                name='status'
                value='Available'
                checked = {status === 'Available'}
                onChange={() => setStatus('Available')}              
              />
              <label for="Available"> Available</label>   

              <input 
                type="radio" 
                id='borrowed'
                name='status'
                value='Borrowed'
                checked = {status === 'Borrowed'}
                onChange={() => setStatus('Borrowed')}
              />
              <label for="Borrwed"> Borrwed </label>
            </div>

            <button
             className='bg-blue-500 px-4 p-2 rounded-xl text-white'
             type='submit'
             disabled= {isSubmitting}
            >
              { isSubmitting ? 'Updating...' : 'Upadte Book'}
            </button>

            <button
             type='button'
              className='text-gray-500 hover:text-gray-700 mt-2'
              onClick={() => navigate(`/individualbookpage/${id}`)}
            >
              cancel
            </button>
          </form>
        </div>
    </div>
  )
}

export default UpdateBookDetails