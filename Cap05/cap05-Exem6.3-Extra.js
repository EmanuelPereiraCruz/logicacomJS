'use strict' //Uso o modo strict, pois ele me assegura de criar as variáveis.

let listaDeNomes = []; //Definindo um array global e vazio, será adicionando os elementos posteriormente.

function exibeNomes(){
    let nome = document.getElementById("inNome").value;
    
    if(nome == ""){/*Verificando se o campo nome foi preenchido ou está vazio, 
    caso o if seja verdadeiro ele exibe uma mensagem através do alert e return para a página.*/
        alert("Por favor, informe um nome.");
        return;
    }

    listaDeNomes.push(nome);

    inNome.value="";

    let listaDeNomesOrdenados = '';

    if(listaDeNomes.length==5){

        btAdicionar.disabled = true; //Desativei o botão, assim após o usuário informar os 5 elementos do array, ele não poderá inserir mais itens.
        
        let copiaDeNomes = listaDeNomes.slice(); //Usando o método slice, eu copio o array originial. Optei por copia-lo, pois não quero alterar nada no array original.
        copiaDeNomes.sort(); //Usando o método sort, organizo o array em ordem alfabética.

        for(let a=0; a<copiaDeNomes.length; a++){
            listaDeNomesOrdenados+=copiaDeNomes[a]+"\n"//Aqui, concateno a variável com ela mesma e com o item do array copiado.
        }
        
        alert("Lista de Nomes em ordem alfabética: "+"\n\n"+listaDeNomesOrdenados)
    }
    
}

let btAdicionaNomes = document.getElementById("btAdicionar");
btAdicionaNomes.addEventListener("click", exibeNomes)
