var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

// view engine setup
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}));

// Routes
app.get('/', (req, res) => {
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome; 
    var idade = req.body.idade; 
    var pais = req.body.pais; 

    if (nome == undefined) {nome = 'undefined'}
    if (sobrenome == undefined) {sobrenome = ''}
    if (idade == undefined) {idade = 'undefined'}
    if (pais == undefined) {pais = 'undefined'}

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

    if (nome == undefined) {nome = 'undefined'}
    if (sobrenome == undefined) {sobrenome = ''}
    if (idade == undefined) {idade = 'undefined'}
    if (pais == undefined) {pais = 'undefined'}
    
    res.render('index', {nome: nome, sobrenome: sobrenome, idade: idade, pais: pais})
});
  
app.post('/index', (req, res) => {
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome; 
    var idade = req.body.idade; 
    var pais = req.body.pais; 
    
    if (nome == undefined) {nome = 'undefined'}
    if (sobrenome == undefined) {sobrenome = ''}
    if (idade == undefined) {idade = 'undefined'}
    if (pais == undefined) {pais = 'undefined'}

    res.render('index', {nome: nome, sobrenome: sobrenome, idade: idade, pais: pais})
});

app.listen(3000, () => {
    console.log(`servidor rodando! http://localhost:${PORT}`)
});