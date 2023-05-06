var express = require('express');
var app = express();
var { sendTemplete } = require('./sendTemplete');
const axios = require('axios');
const port = 3000;

app.use(express.json());

app.use('/messege', sendTemplete);
app.post('/messege', (req, res) => {
    res.send("Sucess");
})




app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})