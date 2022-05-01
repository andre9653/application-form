const fs = require('fs').promises;

const filePath = 'formsSubmit.txt';

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

module.exports = {
  async get(req, res) {
    const readFile = await fs.readFile(filePath);
    const jsonParse = JSON.parse(readFile);
    return res.status(200).json(jsonParse);
  },
  async store(req, res) {
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
          break;
      }
    });

    const readFile = await fs.readFile(filePath);
    const jsonParse = JSON.parse(readFile);
    jsonParse.push({ ...responses, ...result });
    const jsonStringify = JSON.stringify(jsonParse, null, 2);
    await fs.writeFile(filePath, jsonStringify);

    return res.status(201).json(result);
  },
};
