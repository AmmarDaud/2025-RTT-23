// const express = require('express')
// const path = require('path')

import express from 'express'
import path from 'path'
import url from 'url'

// Express App
const app = express();
const PORT = 3000;
console.log(import.meta.url);

const fileName = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(fileName)
console.log(__dirname);


// middlewares
app.use(express.static(path.join(__dirname, 'public')))


// ======== Routes ===================
// GET /
app.get('/', (req, res) => {
    // req: incoming request
    console.log(req.url);
    // console.log(req.headers);

    // res: outgoing data/message
    // res.send('<h1>Hello World!</h1>');
});

// GET /users
app.get('/users', (req, res) => {
    res.send(["max", "elisa"])
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))