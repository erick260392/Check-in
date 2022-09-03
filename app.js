const express = require('express');

const app = express();

const { registerRouter } = require('./routes/registers.routes.js');

app.use(express.json());

app.use('/api/v1/registrations', registerRouter);

app.all('*', (req, res) => {
  res.status(401).json({
    status: 'error',
    message: `this ${req.method}  ${req.url} don't exist in this server`,
  });
});

module.exports = { app };
