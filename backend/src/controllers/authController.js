const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const { randomUUID } = require("crypto");

const users = [];

function signToken(user) {
  const secret = process.env.JWT_SECRET || "dev-secret";
  return jwt.sign(
    { id: user.id, email: user.email },
    secret,
    { expiresIn: "1h" }
  );
}

async function register(req, res, next) {
  try {
    const { username, email, password } = req.body;

    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      return next(createError(409, "Email already registered"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      id: randomUUID(),
      username,
      email,
      password: hashedPassword,
    };

    users.push(user);

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = users.find((u) => u.email === email);

    if (!user) {
      return next(createError(401, "Invalid email or password"));
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return next(createError(401, "Invalid email or password"));
    }

    const token = signToken(user);

    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    next(err);
  }
}

async function logout(req, res, next) {
  res.status(200).json({
    message: "Logout successful",
  });
}

module.exports = {
  register,
  login,
  logout,
};