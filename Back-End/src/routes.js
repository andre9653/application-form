const express = require('express');
const FormsSubmit = require('./controller/FormsSubmitController');

const routes = express.Router();

routes.get('/', FormsSubmit.get);
routes.post('/submit', FormsSubmit.store);

module.exports = routes;
