import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../api/axiosInstance';

const IndividualBookPage = () => {

  const navigate = useNavigate()

  const { id } = useParams();

  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchBooksDetails = async () => {
    if(!id) {
      setError("Book ID is missing from the URL");
      setLoading(false)
      return
    }

    try {
      
      const response = await axiosInstance.get(`/book/${id}`)

      setBook(response.data.book)
      setLoading(false)

    } catch (error) {
      console.error('Error fetching book details:', error )
      setError(error.response?.data?.msg || `failed to load Book with ID: ${id}`)
      setLoading(false)
    }
  }

  useEffect (() => {
    fetchBooksDetails ()
  },[id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading book details
      </div>
    )
  }

  if(error) {
    return (
      <div className=" min-h-screen flex flex-col items-center justify-center p-8 text-red-600 font-bold">
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

  if(!book) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-700"></div>
    )
  }

  const issueBookOnClick = () => {
    navigate ('/issue-book');
  }

  const editBookOnClick = () => {
    navigate(`/edit-book/${id}`)
  }
  if(!mongoose.Types.ObjectId.isValid(book)) {
    return res.status(404).json({ msg: `Book not found(invalid Id Format)`})
  })

  const handleDeleteBook = async () => {
    if (!window.confirm(`Are you sure you want to delete the book "${book.title}"`)) {
      return
    }
    try {
      await axiosInstance.delete(`/book/${id}`)
      alert(`Book "${book.title}" successfully deleted.`)
      navigate('/cheifpage')
    } catch (error) {
      console.error('Deletion Failed:' , error)
      setError(error.response?.data?.msg || `Failed to delete the Book`)
    }
  }

  return (
    <div className="min-h-screen bg-blue-100 text-white p-8">

        <div className="bg-white text-gray-900 rounded-xl p-10 shadow-xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Book Image */}
            <div className="flex justify-center items-start">
            <img
                src={book.imageUrl}
                alt={book.title}
                className="rounded-lg shadow-md w-full object-cover"
            />
            </div>

            {/* Book Details */}
            <div className="space-y-3 text-lg">
            <p><span className="font-semibold">Book Name:</span> {book.title}</p>
            <p><span className="font-semibold">Author:</span> {book.author}</p>
            <p><span className="font-semibold">Status:</span> {book.status}</p>
            <p><span className="font-semibold">Category:</span> {book.category}</p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
                <button
                 className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  onClick={handleDeleteBook} 
                >
                Delete book
                </button>

                <button
                 onClick={issueBookOnClick}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Issue book
                </button>

                <button
                 onClick={editBookOnClick}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800"
                >
                Edit Book Details
                </button>

                <button
                 className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                Book returned
                </button>
            </div>
            </div>

        </div>
    </div>

  )
}

export default IndividualBookPage