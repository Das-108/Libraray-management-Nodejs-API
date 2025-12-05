import React, { useEffect, useState } from 'react'
import IndividualBookPage from './IndividualBookPage'
import AddBookForm from '../components/AddBookForm'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../api/axiosInstance'

const BOOKS_ENDPOINT = '/book'

const BACKEND_URL = 'http://localhost:3000'

const CheifPage = () => {

  const navigate = useNavigate();


  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  const fetchBooks = async () => {

    try {
      const response = await axiosInstance.get(BOOKS_ENDPOINT);
      setBooks(response.data.books);
      setLoading(false)

    } catch (error) {
      console.error('Error Fetching Books:' ,error)
      setError('failed to load books. please check backend connection')
      setLoading(false)
    }

  };

  useEffect(() => {
    fetchBooks()
  },[])

  if(loading) {
    return ( <div className='p-8'> loading books..... </div>)
  }

  if(error) {
    return <div className="p-8 text-red-600"> {error}</div>
  }


  

  const addBookOnClick = () => {
    navigate('/add-book')
  }

  const individualBook = (id) => {
    navigate(`/individualbookpage/${id}`)
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

        {books.map((book) => (
          <div key={book._id} onClick={() => individualBook(book._id)} className=' border w-[280px] p-3 rounded-xl'>
            <img
            className='w-[260px] h-[150px] mb-2 object-cover rounded-lg'
              src={`${BACKEND_URL}/${book.coverImage}`}
            />
            <div className='text-gray-500 tracking-tight'>
              <p>Name: <span className='text-black font-medium'>{book.title}</span></p>
              <p>Author: <span className='text-black font-medium'>{book.author}</span></p>
              <p>Status: <span className={`font-medium ${book.status === 'Available' ? 'text-green-600' : 'text-red-600'}`}>{book.status || 'N/A'}</span></p>
              <p>Category: {book.category}</p>
            </div>
          </div>        
      
        
        ))}
          
      </div>

    </div>

  )
}

export default CheifPage