const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    const { username, password } = req.body
    try {
        let user = await User.findOne({ username })
        if (user) {
            return res.status(400).json({ msg: 'User already exists'})
        }
        User = new User({ username, password})
        await user.save()
        res.status(201).json({ msg: 'user registered succesful'})
    } catch (error) {
        res.status(500).send(`error: ${error}.message`)
    }
}

const loginUser = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username })
        if(!user) {
            return res.status(400).json({ msg: 'Invalid Credentials'})
        }
        const isMatch = await bcrypt.compare( password, user.password)
        if(!isMatch) {
            return res.status(400).json({msg : 'Invalid Credentaials'})
        }
        const payload = { user: { id: user.id}}
        jwt.sign(
            payload,process.env.JWT_SECRET,
            { expiresIn: '1h'}, 
            (err, token) => {
                if(err) throw err;
                res.json({ token })
            }
        )
    }catch (error){
    res.status(500).send('Server Error')
    }
}

module.exports = { registerUser, loginUser }