const express = require('express');

const server = express();

server.get('/teste', (req, res) => {
    res.send('BACKEND FUNCIONANDO 2!');
})

server.listen(3001, () => {
    console.log('API ONLINE');
})