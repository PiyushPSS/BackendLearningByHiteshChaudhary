const express = require('express');
const env = require('dotenv');

const app = express();
env.config();
const port = process.env.PORT;

app.get('/', (request, response) => {
    response.send("HELLO WORKING");
})

app.get('/login', (req, res) => {
    res.send('Login page');
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Youtube</h2>');
})

app.listen(port, () => {
    console.log(`Port running at ${port}`);
})