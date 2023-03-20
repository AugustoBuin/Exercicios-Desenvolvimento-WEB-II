var prompt = require('prompt-sync')();

function promptInt(mensagem, tenteNovamente) {
    var msg = mensagem;
    while (true) {
        var ret = parseInt(prompt(msg));
        if (!isNaN(ret)) return ret;
        msg = tenteNovamente;
    }
};

var nota1 = promptInt('Informe sua nota nas Atividades Práticas em Laboratório: ', "Por favor, digite um número.\nTente novamente: ");
var nota2 = promptInt('Informe sua nota na Prova do Semestre: ', "Por favor, digite um número.\nTente novamente: ");
var nota3 = promptInt('Informe sua nota no Trabalho Teórico: ', "Por favor, digite um número.\nTente novamente: ");

var mPonderada = ((2 * nota1) + (5 * nota2) + (3 * nota3)) / 10;

if (mPonderada > 9 && mPonderada < 10) {
    console.log(`A média do aluno é = ${mPonderada} e sua classificação é A`)}
else if (mPonderada > 8 && mPonderada < 9) {
    console.log(`A média do aluno é = ${mPonderada} e sua classificação é B`)}
else if (mPonderada > 7 && mPonderada < 8) {
    console.log(`A média do aluno é = ${mPonderada} e sua classificação é C`)}
else if (mPonderada > 6 && mPonderada < 7) {
    console.log(`A média do aluno é = ${mPonderada} e sua classificação é D`)}
else if (mPonderada > 5 && mPonderada < 6) {
    console.log(`A média do aluno é = ${mPonderada} e sua classificação é E`)}
else if (mPonderada > 0 && mPonderada < 5) {
    console.log(`A média do aluno é = ${mPonderada} e sua classificação é F`)};