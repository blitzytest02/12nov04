// Express.js Tutorial Application
// This application demonstrates basic Express.js framework usage with multiple endpoints

// 1. Import Dependencies
const express = require('express');

// 2. Application Configuration
const app = express();
const PORT = process.env.PORT || 3000;

// 3. Middleware Configuration
// Parse JSON request bodies for future extensibility
app.use(express.json());

// 4. Route Definitions

// Route 1: Original "Hello world" endpoint
// Maintains the original functionality from the Node.js HTTP server
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Route 2: New "Good evening" endpoint
// Added feature as per user request
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// 5. Server Initialization
// Start the Express server and listen on the configured port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  - GET /       -> "Hello world"`);
  console.log(`  - GET /evening -> "Good evening"`);
});
