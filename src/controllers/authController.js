const authController = require('../controllers/authController');
const authenticate = require('../middlewares/auth');
const validate = require('../middlewares/validate');

async function register(req, res, next) {
    try {
        const { username, email, password } = req.body;
        const user = await authController.register({ username, email, password });
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
        next(err);
    }
}

async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        const token = await authController.login({ email, password });
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        next(err);
    }
}

async function logout(req, res, next) {
    try {
        await authController.logout(req.user);
        res.status(200).json({ message: 'Logout successful' });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    register,
    login,
    logout,
};
