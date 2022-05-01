require('express-async-errors');
const express = require('express');
require('dotenv').config();

const { PORT, HOST } = process.env;

const app = express();

app.use(express.json());

const server = app.listen(PORT, HOST, () => {
  console.log(`Start server on PORT ${PORT}`);
});

module.exports = server;
