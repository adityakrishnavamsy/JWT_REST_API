const jwt = require('jsonwebtoken');

// creating a middlware function to the routes we want to protect using jwt 

module.exports = function (req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access denied !');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next(); // this helps us to continue with the next middleware after this
    }
    catch (err) {
        return res.status(400).send('Invalid Token!');
    }
}