// const express = require('express');

// const authRouter = require('./routes/authRoutes');
// const taskRouter = require('./routes/taskRoutes');
// const { notFound, errorHandler } = require('./middlewares/errorHandler');

// const app = express();

// app.use(express.json());

// app.get('/health', (req, res) => {
//     res.status(200).json({ message: 'Server is healthy' });
// });

// app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/tasks', taskRouter);

// app.use(notFound);
// app.use(errorHandler);

// module.exports = app;

const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is healthy'
    });
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);

module.exports = app;