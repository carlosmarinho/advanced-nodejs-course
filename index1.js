const express = require('express');
const app = express();

app.get('/', (req, res) => {res.send('Eu sou froid');}

app.listen('3000');
