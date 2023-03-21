var prompt = require('prompt-sync')();

function promptInt(mensagem, tenteNovamente) {
    var msg = mensagem;
    while (true) {
        var ret = parseInt(prompt(msg));
        if (!isNaN(ret)) return ret;
        msg = tenteNovamente;
    }
};

var count = promptInt("Informe sua Idade: ", "Por favor, digite um número.\nTente novamente: ");

if (!isNaN(count)) {
    var idade = count;
    var faixaEtaria = '';
    if (idade >= 0 && idade < 15) { 
    faixaEtaria = 'é Criança'
}else if(idade >= 15 && idade < 30){
    faixaEtaria = 'é Jovem';
}else if(idade >= 30 && idade < 60){
    faixaEtaria = 'é Adulto';
} else if(idade > 60){
    faixaEtaria = 'é Idoso';
} else {
    faixaEtaria = 'Ainda não nasceu?!!'
}};

console.log(`Pela sua idade, você: ${faixaEtaria}`);