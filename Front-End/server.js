const express = require('express');

const host = 'localhost';
const port = 8080;

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/`));
app.get('/', (req, res) => {
  res.sendFile(__dirname, '/index.html');
});

app.listen(port, host, () => {
  console.log(`Servidor online na porta ${port}.`);
});
