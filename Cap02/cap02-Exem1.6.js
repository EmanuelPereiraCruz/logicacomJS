function calculaValorDeUso(){
    let valor = document.getElementById("inValor").value;
    valor = Number(valor);

    if(valor == "" || valor <0 || isNaN(valor)){
        alert("Por favor, informe um valor válido!");
        return;
    }

    let tempoDeUso = document.getElementById("inTempodeUso").value;
    tempoDeUso = Number(tempoDeUso);

    if(tempoDeUso == "" || tempoDeUso <0 || isNaN(tempoDeUso)){
        alert("Por favor, preenchar o campo TEMPO!");
        return;
    }

    let valorInteiro = (parseInt(tempoDeUso/15))*2;
    console.log(valorInteiro);

    let valorDecimal = ((tempoDeUso%15))/15;
    valorDecimal = Math.ceil(valorDecimal);
    valorDecimal = valorDecimal*2;
    console.log(valorDecimal);

    let valoFinal = valorInteiro+valorDecimal

    outValorASerPago.textContent = "Valor a Pagar R$: "+valoFinal.toFixed(2);
}

let btCalculaValor = document.getElementById("btCalculaValor");
btCalculaValor.addEventListener("click", calculaValorDeUso)