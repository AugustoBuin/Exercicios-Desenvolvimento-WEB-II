var express = require('express');
var app = express();
const bodyParser = require('body-parser');

// view engine setup
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.render('formulario')
  });
  
app.post('/', (req, res) => {
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome; 
    var idade = req.body.idade; 
    var pais = req.body.pais; 

    if (nome == null) {nome == 'Augusto'}
    else if (sobrenome == null) {sobrenome == 'Henrique Buin'}
    else if (idade == null) {idade == '20'}
    else if (pais == null) {pais == 'Brasil'}

    res.render('index', {nome: nome, sobrenome: sobrenome, idade: idade, pais: pais})
});

app.listen(3000, () => {
    console.log('Servidor Rodando!')
});