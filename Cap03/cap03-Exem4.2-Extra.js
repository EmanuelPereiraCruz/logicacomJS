function comparaNumeros(){
    let numero1 = document.getElementById("inNumero1").value;
    numero1 = Number(numero1);

    let numero2 = document.getElementById("inNumero2").value;
    numero2 = Number(numero2);

    if(numero1>numero2){
        outSaida.textContent = "O primeiro número é maior que o segundo número: "+numero1+" > "+numero2

    }else if(numero1<numero2){
        outSaida.textContent = "O primeiro número é menor que o segundo número: "+numero1+" < "+numero2
    }else{
        outSaida.textContent = "O primeiro número é igual ao segundo número: "+numero1+" = "+numero2
    }
}

let btChecaNumeros = document.getElementById("btComparaNúmeros");
btChecaNumeros.addEventListener("click", comparaNumeros);