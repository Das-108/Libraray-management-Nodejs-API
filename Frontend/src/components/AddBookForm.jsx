
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../api/axiosInstance'

const ADD_BOOK_ENDPOINT = '/book'

const AddBookForm = () => {
    // Hooks and state variables are declared first, making them accessible everywhere.
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [coverImage, setCoverImage] = useState(null)

    const handleAddBook = async (e) => {
        e.preventDefault();

        setLoading(true)
        setError(null)

        if (!title || !author || !category || !coverImage) {
            setLoading(false)
            return setError('Please fill in all fields (Title, Author, Category).')
        }

        try {

            const formData = new FormData();

            formData.append('title', title)
            formData.append('author', author)
            formData.append('category', category)
            formData.append('status', 'Available')

            formData.append('book_cover', coverImage)
            
            const response = await axiosInstance.post(ADD_BOOK_ENDPOINT, formData);

            const bookTitle = response.data.book?.title || title;

            alert(`Book "${bookTitle}" added successfully!`)

            navigate('/cheifpage')

        } catch (error) {
            console.error('Add Book Failed: ', error)

            setError(error.response?.data?.msg || 'Failed to add the book. Server error.')
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className='flex items-center justify-center bg-gray-50 min-h-screen'>
            <div className='border-2 rounded-xl border-gray-200 bg-white w-[400px] p-6 shadow-xl'>
                <h1 className='font-bold text-3xl mb-3 text-center text-gray-800'>
                    Add a Book
                </h1>

                {error && (
                    <div className='text-red-700 bg-red-100 border border-red-300 p-3 rounded-lg text-center mb-4'>
                        {error}
                    </div>
                )}

                {/* ✅ 4. The function is correctly bound here */}
                <form
                    className=' gap-4 flex flex-col justify-center items-center p-2 mb-3'
                    onSubmit={handleAddBook} 
                >
                    <input
                        className='border border-gray-300 rounded-lg p-3 w-full focus:border-blue-500 focus:ring-1'
                        type="text"
                        placeholder='Enter Book Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    {/* ... other inputs (author, category) ... */}
                    <input
                        className='border border-gray-300 rounded-lg p-3 w-full focus:border-blue-500 focus:ring-1'
                        type="text"
                        placeholder='Enter Author Name'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />

                    <input
                        className='border border-gray-300 rounded-lg p-3 w-full focus:border-blue-500 focus:ring-1'
                        type="text"
                        placeholder='Enter Category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />

                    <input
                        className='border border-gray-300 rounded-lg p-3 w-full focus:border-blue-500 focus:ring-1'
                        type="file"
                        accept='image/*'                     
                        onChange={(e) => setCoverImage(e.target.files[0])}
                        required
                    />

                    <button
                        className='bg-blue-600 hover:bg-blue-700 active:scale-[0.98] px-6 p-3 mt-4 rounded-xl text-white font-semibold w-full disabled:opacity-50'
                        type='submit'
                        disabled={loading}
                    >
                        {loading ? 'Adding...' : 'Add Book'}
                    </button>

                    <button
                        type='button'
                        className='text-gray-500 hover:text-gray-700 mt-2'
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