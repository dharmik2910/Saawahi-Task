const jwt = require('jsonwebtoken');
const HttpsError = require('http-errors');


function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new HttpsError(401, 'Unauthorized: No token provided'));
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded user information to the request object
        next();
    } catch (err) {
        return next(new HttpsError(401, 'Unauthorized: Invalid token'));
    }
}

module.exports = authenticate;