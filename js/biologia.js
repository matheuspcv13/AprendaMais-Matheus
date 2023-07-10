function cadastrar() {
    var titulo = document.getElementById("titulo").value;
    var categoria = document.getElementById("cadastrar").value;
    var texto = document.getElementById("anotacao").value;

    var anotacao = document.createElement("div");
    anotacao.className = "anotacao " + categoria;
    anotacao.innerHTML = "<h3>" + titulo + "</h3><p>" + texto + "</p>";

    var anotacoesContainer = document.getElementById("anotacoes-container");
    var numeroAnotacoes = anotacoesContainer.getElementsByClassName("anotacao").length;

    if (numeroAnotacoes >= 6) {
        anotacoesContainer.removeChild(anotacoesContainer.firstChild);
    }

    anotacoesContainer.appendChild(anotacao);

    document.getElementById("titulo").value = "";
    document.getElementById("cadastrar").value = "";
    document.getElementById("anotacao").value = "";

    var contAnota = document.getElementById("cont-anota");
    contAnota.className = "visivel";

    if (texto === "mudar") {
        anotacao.className += " mudar-cor";
    }
}
