function repeteNome(){
    let nome = document.getElementById("inFruta").value;

    if(nome == ""){
        alert("Por favor, informe o nome da fruta.");
        return;
    }

    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    if(numero<=0 || numero==""){
        alert("Por favor, informe um número válido!");
        return;
    }

    var resposta = "";

    for(var i=1; i<=numero; i++){
        resposta = resposta + nome + " * ";
        console.log(resposta)
    }

    outSaida.textContent = resposta
}

let btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", repeteNome)