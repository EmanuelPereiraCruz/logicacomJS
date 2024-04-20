function verificaNumero(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    if(numero<0){
        alert("Por favor, informe um número válido!");
        return;
    }

    if(numero%2==0){
        outSaida.textContent = "Resposta: "+numero+" é PAR"
    }else{
        outSaida.textContent = "Resposta: "+numero+" é ÍMPAR"
    }
}

let btChecaNumero = document.getElementById("btChecaNumero");
btChecaNumero.addEventListener("click", verificaNumero);