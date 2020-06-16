const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./database');
var empControl = require('./controllers/empcontrol');
var app= express();
app.use(bodyParser.json());


app.use(cors({ origin : 'http://127.0.0.1:4200'}));


app.listen(5000,()=> console.log('server starting at 5000'));

app.use('/',empControl);