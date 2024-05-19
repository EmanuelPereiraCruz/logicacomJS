'use strict'

let numerosCadastrados = []; //Defini um array global//

function dobraNumeros(){

    let numero = document.getElementById("inNumero").value;
    numero = Number(numero); //Após armazenar na variável numero o valor do input, transformei esse valor em um numero usando o método number

    numerosCadastrados.push(numero); //Usei o método push para adicionar ao array numerosCadastrados um novo elemento.

    inNumero.value = ""; //Limpei o campo inNumero, assim quando o usuário clicar em adicionar o input é esvaziado.


    if(numerosCadastrados.length==5){ //Como eu preciso receber apenas 5 números, usei um IF pra comparar o tamanho do array.
        /*Caso o array tenha tamanho igual a 5, o if é realizado. Primeiro de tudo, estou desabilitando o botão adicionar,
        assim o usuário não poderá mais adicionar novos números.

        Em seguida, crio o array numerosDuplicados, esse array irá receber o valor dobrado do número.
        Ou seja, se no primeiro array eu tenho na posição [0] = 2, no novo array terei nessa posição 4.
        */

        btAdicionar.disabled = true;

        let numeroDuplicados = [];

        for(let a=0; a<numerosCadastrados.length; a++){
            numeroDuplicados.push(numerosCadastrados[a]*2)//Novamente, usei o método push.
        }
        alert("Os números cadastrados foram: "+numerosCadastrados.join(", ")+"\n\n"+"O novo array com os valores dobrados é: "+numeroDuplicados.join(", "))
    }
}

let btAdicionaNumero = document.getElementById("btAdicionar");
btAdicionaNumero.addEventListener("click", dobraNumeros)
