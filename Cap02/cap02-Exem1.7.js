function calculaPromo(){
    let nomeDoProduto = document.getElementById("inProduto").value;

    if(nomeDoProduto == ""){
        alert("Por favor, informe o NOME do PRODUTO!, :D");
        return;
    }

    let precoDoProduto = document.getElementById("inPreco").value;
    precoDoProduto = Number(precoDoProduto);

    if(precoDoProduto == "" || precoDoProduto <0 || isNaN(precoDoProduto)){
        alert("Por favor, informe o PREÇO do PRODUTO!, :D");
        return;
    };

    let valorFinal = 2*precoDoProduto+(precoDoProduto*1/2);
    let terceiroProduto = precoDoProduto*1/2;

    outProduto.textContent = nomeDoProduto+" - Promoção: Leve 3 por R$: "+valorFinal.toFixed(2);
    outValor.textContent = "O 3º produto custa apenas R$: "+terceiroProduto.toFixed(2);
}


let btExibePromo = document.getElementById("btExibePromo");
btExibePromo.addEventListener("click", calculaPromo);