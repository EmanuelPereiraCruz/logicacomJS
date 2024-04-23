function checaNumero(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    /*Para o exemplo, usei o else if.
    
    1- Se o número é menor que zero, ele é negativo.
    
    2 - Se é maior que zero, ele é positivo.*/
    
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
