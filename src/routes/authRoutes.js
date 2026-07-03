const express = require('express');

const authController = require('../controllers/authController');
const authenticate = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { registerSchema, loginSchema } = require('../validators/schemas');

const router = express.Router();

router.post('/register', validate(registerSchema), authController.register);
router.post('/login', validate(loginSchema), authController.login);
router.get('/logout', authenticate, authController.logout);

module.exports = router;
