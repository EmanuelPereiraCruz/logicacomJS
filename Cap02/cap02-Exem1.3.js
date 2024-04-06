function calculaPromocao(){
    let nomeDoCarro = document.getElementById("inVeiculo").value;
    //Crie um IF pra verificar se o campo carro foi preenchido.
    if(nomeDoCarro == ""){
        alert("Por favor, preencha o nome do carro!");
        return;
    }

    let precoDoCarro = document.getElementById("inPreco").value;
    precoDoCarro = Number(precoDoCarro);

    //Crie um IF pra verificar se o campo foi preenchido com um valor válido. 
    if(precoDoCarro == "" || precoDoCarro <0 || isNaN(precoDoCarro)){
        alert("Por favor, informe o preço correto do carro.");
        return;
    }

    //Crie uma variável onde calculo 50% do preço do carro.
    //Já a segunda variável, parcela, eu peguei o valor da entrada(50%) e depois dividi por 12.
    let entrada = precoDoCarro/2
    let parcela = entrada/12

    outCarro.textContent = "Promoção: "+nomeDoCarro;
    outValores.textContent = "Entrada de R$: "+entrada.toFixed(2)+" + 12 parcelas de R$: "+parcela.toFixed(2);
}

let btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", calculaPromocao);