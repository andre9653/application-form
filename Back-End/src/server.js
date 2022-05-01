require('express-async-errors');
const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const { PORT, HOST } = process.env;

const app = express();

app.use(express.json());
app.use(routes);

const server = app.listen(PORT, HOST, () => {
  console.log(`Start server on PORT ${PORT}`);
});

module.exports = server;
