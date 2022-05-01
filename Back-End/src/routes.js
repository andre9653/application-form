const express = require('express');
const FormsSubmit = require('./controller/FormsSubmit');

const routes = express.Router();

routes.get('/', FormsSubmit.get);
routes.post('/submit', FormsSubmit.store);

module.exports = routes;
