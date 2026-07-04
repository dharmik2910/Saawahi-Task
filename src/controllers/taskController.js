const HttpError = require('../utils/httpError');

function createTask(req, res, next) {
    const { title, completed, userId } = req.body;

    if (!title) {
        return next(new HttpError(400, "Title is required"));
    }

    return res.status(201).json({
        message: "Task created successfully",
        task: {
            title,
            completed: completed || false,
            userId
        }
    });
}

function updateTask(req, res, next) {
    const { id } = req.params;
    const { title, completed } = req.body;

    if (!title && completed === undefined) {
        return next(
            new HttpError(
                400,
                "At least one field (title or completed) is required"
            )
        );
    }

    return res.status(200).json({
        message: "Task updated successfully",
        task: {
            id,
            title,
            completed
        }
    });
}

function deleteTask(req, res) {
    const { id } = req.params;

    return res.status(200).json({
        message: "Task deleted successfully",
        taskId: id
    });
}

function getAllTasks(req, res) {
    return res.status(200).json({
        message: "Tasks retrieved successfully",
        tasks: []
    });
}

function getTaskById(req, res) {
    const { id } = req.params;

    return res.status(200).json({
        message: "Task retrieved successfully",
        task: {
            id,
            title: "Sample Task",
            completed: false
        }
    });
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    getAllTasks: getAllTasks,
    getTaskById
};
