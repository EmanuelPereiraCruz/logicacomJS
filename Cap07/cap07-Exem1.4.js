//Código JS contendo declaração de função anônima

let btExibir = document.getElementById("btexibir");

btExibir.addEventListener("click", function(){

    let preco = document.getElementById("inPreco").value;
    preco = Number(preco);

    let lista = "";

    for(let a=1; a<=10; a++){
        lista+= a + "x de R$: "+(preco/a).toFixed(2) + "\n";
    }

    outParcelas.textContent = "Opções de Pagamento\n\n"+lista;
})