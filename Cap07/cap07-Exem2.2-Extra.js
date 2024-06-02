function verificarParOuImpar(numero){
    let numeroParOuImpar = '';

    if(numero%2==0){
        numeroParOuImpar = "Par."
    }else{
        numeroParOuImpar = "Ímpar."
    }

    alert("O número informado é: "+numeroParOuImpar)
}

let numeroInformado = Number(prompt("Por favor, informe um número: "))
verificarParOuImpar(numeroInformado)

