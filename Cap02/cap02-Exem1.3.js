function calculaPromocao(){
    let nomeDoCarro = document.getElementById("inVeiculo").value;
    //Crie um IF pra verificar se o campo carro foi preenchido. Caso o campo esteja vazio, o alert é realizado.
    /*O return no fim do código faz com que ele não prossiga com a execução das demais partes do código.
    Caso não houvesse esse return, o código seria executado, mesmo que as informações não fossem preenchidas.*/
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
    let entrada = precoDoCarro/2

    //Já a segunda variável, parcela, eu peguei o valor da entrada(50%) e depois dividi por 12.
    let parcela = entrada/12

    /*Aqui, uso o textContent para exibir informações ao usuário, nesse caso: nome do carro + valores pagos.
    Além disso, usando o método .toFixed() consigo definir a quantidade de casas decimais que será exibida.*/
    outCarro.textContent = "Promoção: "+nomeDoCarro;
    outValores.textContent = "Entrada de R$: "+entrada.toFixed(2)+" + 12 parcelas de R$: "+parcela.toFixed(2);
}

/*Por fim, criei uma variável que faz referência ao botão do documento HTML.
Quando o botão é clicado, a função calculaPromocao é realizada. Para que isso possa ocorrer, é fundamental usar o addEventListener*/
let btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", calculaPromocao);
