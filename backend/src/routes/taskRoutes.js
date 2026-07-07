const express = require('express');
const taskController = require('../controllers/taskController');

const HttpError = require("../utils/httpError");
const router = express.Router();

let tasks = [];

router.post('/', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
