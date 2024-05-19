'use strict'

let listaDeNomes = [];

function exibeNomes(){
    let nome = document.getElementById("inNome").value;
    
    if(nome == ""){
        alert("Por favor, informe um nome.");
        return;
    }

    listaDeNomes.push(nome);

    inNome.value="";

    let listaDeNomesOrdenados = '';

    if(listaDeNomes.length==5){

        btAdicionar.disabled = true;

        let copiaDeNomes = listaDeNomes.slice();
        copiaDeNomes.sort();

        for(let a=0; a<copiaDeNomes.length; a++){
            listaDeNomesOrdenados+=copiaDeNomes[a]+"\n"
        }
        
        alert("Lista de Nomes em ordem alfabética: "+"\n\n"+listaDeNomesOrdenados)
    }
    
}

let btAdicionaNomes = document.getElementById("btAdicionar");
btAdicionaNomes.addEventListener("click", exibeNomes)