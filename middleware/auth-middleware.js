const jwt = require('jsonwebtoken');
require('dotenv').config();



const authenticateToken = async (req, res, next) => {

    // Get the header
    const authHeader = req.headers['authorization'];
    
    // Check if authHeader exists
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    // Get Token
    // Extact Token from Bearer Authorization header
    const token = authHeader.substring("Bearer ".length);

    // Check if token exists
    if (!token) {
        return res.status(401).json({ message: 'No authentication token provided.' });
    }

    

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] }, );
        // Attatch User info to request object
        req.user = decoded;
        next();
        
    }

    catch(error) {
        // Error Handling
        console.error('Token verification failed:');
        return res.status(403).json({ error: 'Invalid or expired token.' });
    }
}

module.exports = authenticateToken;