function calculaPrecoPorConsumo(){
    let preco = document.getElementById("inPreco").value;
    preco = Number(preco);

    if(preco == "" || preco <0 || isNaN(preco)){
        alert("O preço é inválido: Campo Vazio ou Preenchido Incorretamente.");
        return;
    }

    let consumo = document.getElementById("inConsumo").value;
    
    if(consumo == ""){
        alert("O campo consumo precisa ser preenchido!");
        return;
    }

    let valorFinal = (consumo/1000)*preco;

    outValorPago.textContent = "Valor a pagar R$: "+valorFinal.toFixed(2);
}

let btPreco = document.getElementById("btPreco");
btPreco.addEventListener("click", calculaPrecoPorConsumo);