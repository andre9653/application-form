const FormsSubmit = require('../model/FormsSubmitModel');

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
  // Faz leitura do arquivo e retorna um json.
  async get() {
    const jsonParse = JSON.parse(await FormsSubmit.get());
    return jsonParse;
  },

  // Adiciona um resultado de formulário ao database
  async store(responses) {
    const result = new Result();
    // Itero pelas respostas gerando um efeito colateral de acordo com a regra de negocio.
    Object.values(responses).forEach((response) => {
      switch (response.toLowerCase()) {
        case 'sim':
          result.positive();
          break;
        case 'não':
          result.negative();
          break;
        case 'não sei':
          result.notAvailed();
          break;
        case 'agora!!':
          result.positive(2);
          break;
        default:
          break;
      }
    });
    // retorna a resposta trada para o cliente.
    return FormsSubmit.store(result);
  },
};
