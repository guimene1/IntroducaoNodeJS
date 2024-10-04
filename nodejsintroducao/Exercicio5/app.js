const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pag.html'));
});

app.get('/api/data', (req, res) => {
    res.sendFile(path.join(__dirname, 'json.json'));
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});