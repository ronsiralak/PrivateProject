// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes for authentication and task management will go here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
