const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send("Bem Vindo!");
});

app.get('/saudacao/:nome', (req, res) => {
    const nome = req.params.nome;
    res.status(200).send(`Olá, ${nome}`);
});

app.use((req, res) => {
    res.status(404).send("Página não encontrada.");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
