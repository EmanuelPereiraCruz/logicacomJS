'use strict'

let noticiasCadastradas = [];

function cadastrarNoticias(){
    let noticias = document.getElementById("inNoticia").value;
    
    if(noticias == ""){
        alert("Por favor, adicione uma noticia!");
        return;
    }

    noticiasCadastradas.push(noticias);

    console.log(noticiasCadastradas);

    inNoticia.value = "";

    listarNoticiasCadastradas()
}

let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", cadastrarNoticias)

function listarNoticiasCadastradas(){

    let listaDeNoticiasCadastradas = ""

    for(let a=0; a<noticiasCadastradas.length; a++){
        listaDeNoticiasCadastradas+=a+1+"º) "+noticiasCadastradas[a]+"\n";
    }

    outQtdNoticiasCadastradas.textContent = "Notícias Cadastradas: "+noticiasCadastradas.length;

    outNoticiasListadas.textContent = listaDeNoticiasCadastradas;
}

function listarUltimasNoticiasCadastradas(){
    let qtdNoticiasVisualizar = prompt("Por favor, informe a quantidade de noticias que você deseja visualizar.\n\n Iremos exibir as últimas noticias cadastradas.")
    qtdNoticiasVisualizar = Number(qtdNoticiasVisualizar);

    if(qtdNoticiasVisualizar > noticiasCadastradas.length ){
        alert("A quantidade de noticias cadastradas é menor do que a quantidade que você deseja visualizar.");
        return;
    }

    let copiaDeNoticias = noticiasCadastradas.slice();
    copiaDeNoticias.reverse();

    let listaDeNoticiasCadastradas = ""

    for(let a=0; a<qtdNoticiasVisualizar; a++){
        listaDeNoticiasCadastradas+=copiaDeNoticias[a]+"\n"
    }

    outNoticiasListadas.textContent = qtdNoticiasVisualizar+" Últimas Notícias\n--------------------------------------------\n"+listaDeNoticiasCadastradas+"\n";

}

let btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarUltimasNoticiasCadastradas)