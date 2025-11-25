import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../api/axiosInstance'

const AddBookForm = () => {

  const ADD_BOOK_ENDPOINT = '/book'

  const AddBookForm = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleAddBook = async (e) => {
      e.preventDefault();

      setLoading(true)
      setError(null)

      if(!title || !author || !category) {
        setLoading(false)
        return setError('Please fill in all fields (title,author,category)')
      }

      try {
        const payload = {
          title,
          author,
          category,
          status: 'Available'
        }

        const response = await axiosInstance.post(ADD_BOOK_ENDPOINT, payload);
        alert(`Book "${response.data.book.title}" addded sucessfully!`)

        navigate('/cheifpage')

      } catch (error) {
        console.error('Add Book Failed: ' ,error)
        
        setError(error.response?.data?.msg || 'failed to add the book. server error.')        
      }finally {
        setLoading(false)
      }
    }

  }



  return (
    <div className='flex items-center justify-center bg-blue-300 min-h-screen'>
        <div className='border-2 rounded-xl border-gray-50 bg-white w-[350px] h-auto p-4 text-center justify-center'>
            <h1 className='font-bold text-3xl mb-3'>
                Add a Book
            </h1>

            <form className=' gap-4 flex flex-col justify-center items-center p-2 mb-3' action="">
                <input
                 className='border border-gray-200 rounded-2xl p-2 w-2/3'
                  type="text"
                  placeholder='Enter Book Name'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />

                <input
                 className='border border-gray-200 rounded-2xl p-2 w-2/3'
                  type="text"
                  placeholder='Enter Author Name'
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />

                <input
                 className='border border-gray-200 rounded-2xl p-2 w-2/3'
                  type="text"
                  placeholder='Enter Cateory of books'
                  value={category}
                  onChange={(e) => setCategory(e.target.valu)}
                  required
                />

                <button
                 className='bg-blue-500 px-4 p-2 rounded-xl text-white'
                 type='submit'
                 disabled={loading}
                >
                  { loading? 'Adding...' : 'Add Book'}
                </button>

                <button
                  type='button'
                 className='text-gray-500 mt-2'
                 onClick={() => navigate('/cheifpage')}
                >
                  Cancel
                </button>
            </form>


        </div>
    </div>
  )
}

export default AddBookForm