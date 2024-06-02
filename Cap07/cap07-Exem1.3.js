function mostrarDados(){
    let modelo = document.getElementById("inModelo").value;

    let ano = document.getElementById("inAno").value;

    let preco = document.getElementById("inPreco").value;
    preco = Number(preco);
    console.log(preco)

    if(modelo == "" || ano == 0 || preco == 0){
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let classificacao = classificarVeiculo(ano);

    let precoVenda = calcularVenda(preco, classificacao);

    outSaida.textContent = modelo + " - " + classificacao;

    outSaida2.textContent = "Preço de Venda R$: " + precoVenda.toFixed(2);
}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarDados)

function classificarVeiculo(ano){

    let anoAtual = new Date().getFullYear();

    let classif;

    if(ano == anoAtual){
        classif = "Novo";

    }else if(ano == anoAtual-1 || ano==anoAtual-2){
        classif = "Seminovo";
    }else{
        classif = "Usado"
    }

    return classif
}

function calcularVenda(preco, classificacao){
    let prVenda = (classificacao == "Novo") ? preco * 1.08 : preco * 1.10;
    return prVenda
}