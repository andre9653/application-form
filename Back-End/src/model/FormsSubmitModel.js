const fs = require('fs').promises;

const filePath = 'formsSubmit.txt';

module.exports = {
  async get() {
    return fs.readFile(filePath);
  },
  async store(data) {
    // faz a leitura e tratamento do arquivo
    const readFile = await fs.readFile(filePath);
    const jsonParse = JSON.parse(readFile);
    // Adiciona nova submissão do formulário ao banco de dados
    jsonParse.push(data);
    const jsonStringify = JSON.stringify(jsonParse, null, 2);
    await fs.writeFile(filePath, jsonStringify);
    return data;
  },
};
