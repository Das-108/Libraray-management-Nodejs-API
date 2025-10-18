const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith ('Bearer'))
        return res.status(401).json({ error: 'Uanuthorized'})

    const token = authHeader.split(' ')[1];
    
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload
        next()
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token'})
    }
};

module.exports = authMiddleware