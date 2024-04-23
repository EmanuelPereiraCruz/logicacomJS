function verificaNumero(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    let resultado = numero%2==0 ? outSaida.textContent = "O número informado é PAR!" : outSaida.textContent = "O número informado é ÍMPAR!";

}

let btVerificaNumero = document.getElementById("btVerificaNumero");
btVerificaNumero.addEventListener("click", verificaNumero);