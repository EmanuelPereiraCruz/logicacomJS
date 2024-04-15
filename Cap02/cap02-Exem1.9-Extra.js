function calculaDesconto(){
    let preco = document.getElementById("inPreco").value;
    preco = Number(preco);

    if(preco == "" || preco <0){
        alert("Por favor, informe um PREÇO VÁLIDO!");
        return;
    }

    let desconto = document.getElementById("inDesconto").value;
    inDesconto = Number(inDesconto);

    if(inDesconto == "" || inDesconto <0){
        alert("Por favor, informe um DESCONTO VÁLIDO!");
        return;
    }

    let valoFinal = preco-(preco*(desconto/100));
    
    let nome = document.getElementById("inNome").value;

    outNome.textContent = "Produto selecionado: "+nome;

    outValorFinal.textContent = "Preço final R$: "+valoFinal.toFixed(2);
}

let btCalculaDesconto = document.getElementById("btCalculaDescon");
btCalculaDesconto.addEventListener("click", calculaDesconto);