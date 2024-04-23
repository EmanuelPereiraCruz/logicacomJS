function checaNumero(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    if(numero<0){
        outSaida.textContent = "O número informado é negativo!"
    }else if(numero==0){
        outSaida.textContent = "O número informado é 0!"
    }else{
        outSaida.textContent = "O número informado é positivo!"
    }
}

let btChecaNumero = document.getElementById("btChecaNumero");
btChecaNumero.addEventListener("click", checaNumero);