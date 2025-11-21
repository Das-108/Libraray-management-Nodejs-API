const connectDB = require('./db/connectDB')
const express = require('express')
const app = express()
const book = require('./routes/book')
const user = require('./routes/user')

//middleware
app.use(express.json())

//routes
app.use('/api/v1/book', book)
app.use('/api/v1/user', user)

const port = 3000

const start = async (req, res) => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Sever listening on Port ${3000}`))
    } catch (error) {
        console.log(error)
    }
}

start();