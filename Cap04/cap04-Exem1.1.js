function mostrarTabuada(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    if(numero == 0){
        alert("Informe um número válido!");
        return;
    }

    let resposta = "";

    for( var i = 1; i<=10; i++){
        resposta = resposta + numero + " x " + i + " = " + numero*i+"\n";
        console.log(resposta)
    }

    outSaida.textContent = resposta

}

let btMostra = document.getElementById("btMostrar");
btMostra.addEventListener("click", mostrarTabuada)
