const express = require('express');

const routes = express.Router();

class Result {
  constructor() {
    this.QuantidadePositiva = 0;
    this.QuantidadeNegativa = 0;
    this.QuantidadeNaoAvaliada = 0;
  }

  positive(num = 1) {
    this.QuantidadePositiva += num;
  }

  negative() {
    this.QuantidadeNegativa += 1;
  }

  notAvailed() {
    this.QuantidadeNaoAvaliada += 1;
  }
}

routes.post('/submit', (req, res) => {
  const responses = { ...req.body };

  const result = new Result();

  Object.values(responses).forEach((response) => {
    switch (response) {
      case 'Sim':
        result.positive();
        break;
      case 'Não':
        result.negative();
        break;
      case 'Não Sei':
        result.notAvailed();
        break;
      case 'Agora!!':
        result.positive(2);
        break;
      default:
        console.log('invalid');
        break;
    }
  });
});

module.exports = routes;
