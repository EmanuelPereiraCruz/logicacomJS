function checaNumeros(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    let numerosPares = [];

    for(i=numero; i<=10; i++){
        if(i%2==0){
            numerosPares.push(i)
            console.log(numerosPares)
        }
    }

    let numerosParesString = numerosPares.join(", ");

    if(numerosPares.length>1){
        outSaida.textContent = "Os números pares entre: "+numero+" e 10 são: "+numerosParesString;
    }else{
        outSaida.textContent = "O número par entre: "+numero+" e 10 é: "+numerosParesString;
    }
}

let btCheca = document.getElementById("btChecaNumero");
btCheca.addEventListener("click", checaNumeros)