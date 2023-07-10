function adicionarValor(valor) {
    var tela = document.getElementById("tela");
    tela.value += valor;
}

function calcular() {
    var tela = document.getElementById("tela");
    var resultado = eval(tela.value);
    tela.value = resultado;
}

function limpar() {
    var tela = document.getElementById("tela");
    tela.value = "";
}