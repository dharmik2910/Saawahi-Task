const { Random } = require('mockjs');

const users = [];
const tasks = [];
const activities = [];

function createUser() {
    const user = {
        id: Random.guid(),
        name: Random.name(),
        email: Random.email(),
        password: Random.string(8)
    };
    users.push(user);
    return user;
}

function createTask(userId) {
    const task = {
        id: Random.guid(),
        title: Random.ctitle(5, 10),
        status: Random.pick(['pending', 'in-progress', 'completed']),
        userId
    };
    tasks.push(task);
    return task;
}

module.exports = { users, tasks, createUser, createTask };
