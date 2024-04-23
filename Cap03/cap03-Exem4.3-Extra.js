function verificaNumero(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    let resultado = numero%3==0 && numero%5==0 ?  outSaida.textContent = "O número é divisível por 3 e 5 simultaneamente." :  outSaida.textContent = "O número não é divisível por 3 e 5 simultaneamente.";
    console.log(resultado);
}

let btChecaNumero = document.getElementById("btChecaDivisores");
btChecaNumero.addEventListener("click", verificaNumero)