'use strict'

let candidatos = [];

function adicionarCandidatos(){
    let nome = document.getElementById("inNome").value;
    console.log(typeof(nome))

    let numeroDeAcertos = document.getElementById("inAcerto").value;
    numeroDeAcertos = Number(numeroDeAcertos);
    console.log(typeof(numeroDeAcertos))

    if(nome == "" || numeroDeAcertos <0){
        alert("Por favor, preencha os campos corretamente.");
        return;
    }

    candidatos.push({nome: nome, nota: numeroDeAcertos});
    console.log(candidatos);

    inNome.value = "";
    inAcerto.value = "";

    listarCandidatosCadastrados()

}

let btAdiciona = document.getElementById("btAdicina");
btAdiciona.addEventListener("click", adicionarCandidatos)


function listarCandidatosCadastrados(){
    if(candidatos.length == 0){
        alert("Não existem candidatos cadastrados.");
        return;

    }else{
        var listaDeCandidatos = ""
    
    for(let i=0; i<candidatos.length; i++){

        listaDeCandidatos+=candidatos[i].nome+" - "+candidatos[i].nota+ " Acertos"+"\n";

        console.log(candidatos[i].nome+" - "+candidatos[i].nota+ " Acertos"+"\n")}

        outSaida.textContent = listaDeCandidatos
    }
}

let btListarTodos = document.getElementById("btListarTodos");
btListarTodos.addEventListener("click", listarCandidatosCadastrados)

function aprovadosSegundaFase(){
    let acertosParaAprovacao = prompt("Número de Acertos para Aprovação?");
    acertosParaAprovacao = Number(acertosParaAprovacao);

    let candidatosCopia = candidatos.slice();
    candidatosCopia.sort(function(a, b){return b.nota - a.nota})

    var listaDeCandidatos = ""

    for(let i=0; i<candidatosCopia.length; i++){

        if(candidatosCopia[i].nota>=acertosParaAprovacao){
            listaDeCandidatos+=candidatosCopia[i].nome+ " - " +candidatosCopia[i].nota+" Acertos"+"\n";
        }
    }outSaida.textContent = listaDeCandidatos;
}

let btListarAprovados = document.getElementById("btListarAprovados");
btListarAprovados.addEventListener("click", aprovadosSegundaFase)