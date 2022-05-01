const FormsSubmit = require('../services/FormsSubmitServices');

module.exports = {
  async get(req, res) {
    const result = await FormsSubmit.get();
    return res.status(200).json(result);
  },
  async store(req, res) {
    const responses = { ...req.body };
    const result = await FormsSubmit.store(responses);
    return res.status(201).json(result);
  },
};
