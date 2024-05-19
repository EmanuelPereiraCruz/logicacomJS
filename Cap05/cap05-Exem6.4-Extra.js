'use strict'

let numerosCadastrados = [];

function dobraNumeros(){

    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    numerosCadastrados.push(numero);

    inNumero.value = "";


    if(numerosCadastrados.length==5){

        btAdicionar.disabled = true;

        let numeroDuplicados = [];

        for(let a=0; a<numerosCadastrados.length; a++){
            numeroDuplicados.push(numerosCadastrados[a]*2)
        }
        alert("Os números cadastrados foram: "+numerosCadastrados.join(", ")+"\n\n"+"O novo array com os valores dobrados é: "+numeroDuplicados.join(", "))
    }
}

let btAdicionaNumero = document.getElementById("btAdicionar");
btAdicionaNumero.addEventListener("click", dobraNumeros)
