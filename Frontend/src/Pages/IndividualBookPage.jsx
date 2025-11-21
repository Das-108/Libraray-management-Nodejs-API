import React from 'react'

const IndividualBookPage = () => {
  return (
    <div className="min-h-screen bg-blue-100 text-white p-8">

        <div className="bg-white text-gray-900 rounded-xl p-10 shadow-xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Book Image */}
            <div className="flex justify-center items-start">
            <img
                src="/path-to-book-image.jpg"
                alt="Book"
                className="rounded-lg shadow-md w-full object-cover"
            />
            </div>

            {/* Book Details */}
            <div className="space-y-3 text-lg">
            <p><span className="font-semibold">Book Name:</span> ________</p>
            <p><span className="font-semibold">Author:</span> ________</p>
            <p><span className="font-semibold">Status:</span> ________</p>
            <p><span className="font-semibold">Category:</span> ________</p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                Delete book
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Issue book
                </button>
                <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800">
                Edit Book Details
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Book returned
                </button>
            </div>
            </div>

        </div>
    </div>

  )
}

export default IndividualBookPage