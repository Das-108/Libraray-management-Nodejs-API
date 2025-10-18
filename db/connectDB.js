const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async (req, res) => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`)
        process.exit(1)
    }
}


module.exports = connectDB