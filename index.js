// Requires
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Routes
const empresas = require('./routes/empresas.route')
const unidades = require('./routes/unidades.route')
const ativos = require('./routes/ativos.route')
const app = express();

// Connecting DB
let url = 'mongodb+srv://<login>:<passwoord>@cluster0.m3ulr.mongodb.net/empresas?retryWrites=true&w=majority'
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));


//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/empresas', empresas);
app.use('/unidades', unidades);
app.use('/ativos', ativos);


const port = 3000
app.listen(port, console.log("Server on na porta: " + port))