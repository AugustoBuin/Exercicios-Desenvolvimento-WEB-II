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
    if (idade >+ 0 && idade < 15) { 
    faixaEtaria = 'Criança'
}else if(idade >= 15, idade < 30){
    faixaEtaria = 'Jovem';
}else if(idade >= 30, idade < 60){
    faixaEtaria = 'Adulto';
} else if(idade > 60){
    faixaEtaria = 'Idoso';
}};


console.log(`Pela sua idade, você é: ${faixaEtaria}`);