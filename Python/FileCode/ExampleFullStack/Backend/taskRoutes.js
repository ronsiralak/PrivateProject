// taskRoutes.js
const express = require('express');
const router = express.Router();

// Import task controllers
const { createTask, getTasks } = require('./controllers/taskController');

router.post('/tasks', createTask);
router.get('/tasks', getTasks);

module.exports = router;
