//Função recebe 2 parâmetros: nota e média

function exibirSituacao(nota, media){
    if(nota>=media){
        alert("Aprovado!");
    }else{
        alert("Reprovado!");
    }
}

let prova1 = Number(prompt("Qual sua nota: "))

exibirSituacao(prova1, 7);
