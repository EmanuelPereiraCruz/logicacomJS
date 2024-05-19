'use strict'

let numerosCadastrados = [];

function cadastrarNumeros(){

    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    numerosCadastrados.push(numero);

    inNumero.value = "";

    if(numerosCadastrados.length==5){

        btAdicionar.disabled = true;

        var numerosPares = [];

        for(let a=0; a<numerosCadastrados.length; a++){
            if(numerosCadastrados[a]%2==0){
                numerosPares.push(numerosCadastrados[a])
            }
            
        } alert("Os números pares cadastrados foram: "+"\n"+numerosPares)

    } 

}

let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", cadastrarNumeros)