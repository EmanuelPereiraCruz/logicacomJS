function verificaNumero(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    /*
    Nesse exemplo, usei o operador ternário! :D
    
    Através dele, podemos simplificar o uso do if.
    Usando o operador ternário, na variável resultado armazenamos o valor da verificação.
    Ou seja, se o resto da divisão de numero por 2 for igual a 0, ou seja, true, na variável resultado será armazenado "O número informado é par.
    Caso contrário, será armazenado na variável a seguinte informação: "O número informado é ÍMPAR!"*/
    
    let resultado = numero%2==0 ? outSaida.textContent = "O número informado é PAR!" : outSaida.textContent = "O número informado é ÍMPAR!";

}

let btVerificaNumero = document.getElementById("btVerificaNumero");
btVerificaNumero.addEventListener("click", verificaNumero);
