import express from 'express';

const app = express();

// Test Route
app.get('/', (req, res) => {
  res.send('Hello, World! Server is working fine.');
});

export default app;
