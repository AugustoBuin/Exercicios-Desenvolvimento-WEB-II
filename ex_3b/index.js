var express = require('express');
var app = express();
const bodyParser = require('body-parser');

// view engine setup
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}));

// Routes
app.get('/', (req, res) => {
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome; 
    var idade = req.body.idade; 
    var pais = req.body.pais; 

    if (nome == undefined) {nome = 'Augusto'}
    if (sobrenome == undefined) {sobrenome = 'Henrique Buin'}
    if (idade == undefined) {idade = '20'}
    if (pais == undefined) {pais = 'Brasil'}

    // console.log(typeof(nome), typeof(sobrenome), typeof(idade), typeof(pais))

    res.render('index', {nome: nome, sobrenome: sobrenome, idade: idade, pais: pais})
});

app.get('/formulario', (req, res) => {
    res.render('formulario')
  });

app.get('/index', (req, res) => {
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome; 
    var idade = req.body.idade; 
    var pais = req.body.pais; 

    if (nome == undefined) {nome = 'Augusto'}
    if (sobrenome == undefined) {sobrenome = 'Henrique Buin'}
    if (idade == undefined) {idade = '20'}
    if (pais == undefined) {pais = 'Brasil'}
    
    res.render('index', {nome: nome, sobrenome: sobrenome, idade: idade, pais: pais})
});
  
app.post('/index', (req, res) => {
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome; 
    var idade = req.body.idade; 
    var pais = req.body.pais; 
    
    if (nome == undefined) {nome = 'Augusto'}
    if (sobrenome == undefined) {sobrenome = 'Henrique Buin'}
    if (idade == undefined) {idade = '20'}
    if (pais == undefined) {pais = 'Brasil'}

    res.render('index', {nome: nome, sobrenome: sobrenome, idade: idade, pais: pais})
});

app.listen(3000, () => {
    console.log('Servidor Rodando!')
});