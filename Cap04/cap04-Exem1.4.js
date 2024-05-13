function verificarPrimo(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    if(numero == 0 || numero == ""){
        alert("Por favor, informe um número válido.");
        return;
    }

    let numDivisores = 0

    for(var i=1; i<=numero; i++){
        if(numero%i==0){
            numDivisores++;
        }
    }

    if(numDivisores == 2){
        outResposta.textContent = numero + " É primo.";
    }else{
        outResposta.textContent = numero + " Não é primo.";
    }
}


let btVerifica = document.getElementById("btVerifica");
btVerifica.addEventListener("click", verificarPrimo)