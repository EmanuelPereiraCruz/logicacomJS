function checaNumeros(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    if(numero <= 0 || numero == ""){
        alert("Por favor, informe um número válido!");
        return;
    }

    let divisores = [];

    let soma = 0

    for(i=1; i<numero; i++){
        if(numero%i==0){
            divisores.push(i)
            console.log("Divisores:"+divisores);
            soma = i+soma;
            console.log("Soma:"+soma);
        }  
    }
    let divisoresString = divisores.join(', ');
    console.log(divisoresString)
    
    outDivisores.textContent = "Divisores do número "+numero+": "+divisoresString+"."+" Soma dos divisores: "+soma

    if((soma)==numero){
        outNumPerfeito.textContent = numero+": é um número perfeito!"
        console.log("O número é perfeito!")
    }else{
        outNumPerfeito.textContent = numero+": não é um número perfeito!"
        console.log("O número não é perfeito.")
    }
}


let btCheca = document.getElementById("btVerifica");
btCheca.addEventListener("click", checaNumeros)