function calculaPromo(){
    let medicamento = document.getElementById("inMedicamento").value;

    if(medicamento == ""){
        alert("Por favor, preencha o campo: MEDICAMENTO");
        return;
    }

    let preco = document.getElementById("inPreco").value;

    if(preco == "" || preco <0 || isNaN(preco)){
        alert("Por favor, informe um valor válido!");
        return;
    }

    let valorFinal = 2 * preco;
    valorFinal = parseInt(valorFinal);
    
    outMedicamento.textContent = "Promoção de "+medicamento;

    outPromocao.textContent = "Leve 2 por apenas R$: "+valorFinal.toFixed(2);
}

let btMostraPromo = document.getElementById("btMostraPromo");
btMostraPromo.addEventListener("click", calculaPromo);