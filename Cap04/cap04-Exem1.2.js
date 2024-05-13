function decresceNumero(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    if(numero<=0){
        alert("O número precisa ser maior que zero!");
        return;
    }

    let resposta = "Entre " + numero + " e 1: ";

    for(var i=numero; i>1; i--){
        resposta = resposta + i + " , ";
    } resposta = resposta + i + ".";

    outSaida.textContent = resposta;
}

let btDecresce = document.getElementById("btDescresce");
btDecresce.addEventListener("click", decresceNumero);