require('express-async-errors');
const express = require('express');
require('dotenv').config();
const routes = require('./routes');

const { PORT, HOST } = process.env;

const app = express();

app.use(express.json());
app.use(routes);

const server = app.listen(PORT, HOST, () => {
  console.log(`Start server on PORT ${PORT}`);
});

module.exports = server;
