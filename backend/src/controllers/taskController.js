const HttpError = require('../utils/httpError');

const tasks = [];

function createTask(req, res, next) {
    const { title, completed } = req.body;

    if (!title) {
        return next(new HttpError(400, "Title is required"));
    }

    const task = {
        id: Date.now().toString(),
        title,
        completed: completed || false,
    };

    tasks.push(task);

    return res.status(201).json({
        message: "Task created successfully",
        task,
    });
}

async function updateTask(req, res, next) {
    const { id } = req.params;
    const { title, completed } = req.body;

    const task = tasks.find((t) => t.id === id);

    if (!task) {
        return next(new HttpError(404, "Task not found"));
    }

    if (title !== undefined) task.title = title;
    if (completed !== undefined) task.completed = completed;

    return res.status(200).json({
        message: "Task updated successfully",
        task,
    });
}

function deleteTask(req, res, next) {
    const { id } = req.params;

    const index = tasks.findIndex((t) => t.id === id);

    if (index === -1) {
        return next(new HttpError(404, "Task not found"));
    }

    tasks.splice(index, 1);

    return res.status(200).json({
        message: "Task deleted successfully",
    });
}

function getAllTasks(req, res) {
    return res.status(200).json({
        message: "Tasks retrieved successfully",
        tasks,
    });
}

function getTaskById(req, res, next) {
    const { id } = req.params;

    const task = tasks.find((t) => t.id === id);

    if (!task) {
        return next(new HttpError(404, "Task not found"));
    }

    return res.status(200).json({
        message: "Task retrieved successfully",
        task,
    });
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    getAllTasks: getAllTasks,
    getTaskById
};
