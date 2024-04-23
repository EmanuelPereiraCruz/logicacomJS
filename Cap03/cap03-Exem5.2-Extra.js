function verificaNumero(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    if((numero%1==0 && numero%2==0 && numero/numero==1 && numero>=4) || (numero%1==0 && numero%3==0 && numero/numero==1 && numero>=4)){
        outSaida.textContent = "O número "+numero+" não é primo!"
    }else(
        outSaida.textContent = "O número "+numero+" é primo!"
    )
}

let btChecaNumero = document.getElementById("btChecaNumero");
btChecaNumero.addEventListener("click", verificaNumero)