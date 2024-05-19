let criancas = [];

function adicionarCrianca(){
    let nome = document.getElementById("inNome").value;

    let idade = document.getElementById("inIdade").value;
    idade = Number(idade);

    if(nome == "" || idade == 0){
        alert("Por favor, informe dados válidos.");
        return;
    }

    criancas.push({nome: nome, idade: idade});

    console.log(criancas);

    inNome.value = "";
    inIdade.value = "";

    listarCriancas()

}

let btAdiciona = document.getElementById("btCadastrar");
btAdiciona.addEventListener("click", adicionarCrianca)

function listarCriancas(){
    if(criancas.length == 0){
        alert("Não existem crianças cadastradas.");
        return;
    }

    var listaDeCriancas = "";

    for(a=0; a<criancas.length; a++){
        listaDeCriancas+=criancas[a].nome + " - "+ criancas[a].idade+" anos"+"\n"
    }

    outSaida.textContent = listaDeCriancas;
}

let btListarCriancas = document.getElementById("btListar");
btListarCriancas.addEventListener("click", listarCriancas)

function resumirLista(){
    if(criancas.length == 0){
        alert("Não há crianças na lista.");
        return
    }

    let copia = criancas.slice(); //O método slice cria uma cópia do vetor, nesse caso do vetor crianças.

    copia.sort(function(a, b){return a.idade-b.idade}); //Ordena o vetor copia por idade.
    /*Quando usamos o retur a-b é feito uma comparação entre os dois elementos do Arrya.
    Se a-b for maior que zero, significa que a é maior que b, e por conseguinte eles mudam de posição.
    Se a-b for menor que zero, significa que a é menor que b e nesse caso, eles não mudam de posição. */

    let resumo = ""; //Usamos a variável resumo para concatenar os resultados obtidos através do laço for.

    let aux = copia[0].idade;

    let nomeCriancas = [];

    for(i=0; i<copia.length; i++){
        if(copia[i].idade == aux){
            nomeCriancas.push(copia[i].nome);
        }else{
            resumo += aux + " ano(s): "+nomeCriancas.length + " criança(s) ";
            resumo += (nomeCriancas.length/copia.length*100).toFixed(2) + "%\n";
            resumo += "(" + nomeCriancas.join(", ") + ")\n\n";
            aux = copia[i].idade;
            nomeCriancas = [];
            nomeCriancas.push(copia[i].nome);
        }
    }

    resumo += aux + " ano(s): " + nomeCriancas.length + " criança(s) - ";
    resumo += (nomeCriancas.length/copia.length*100).toFixed(2) + "%\n";
    resumo += "(" + nomeCriancas.join(", ") + ")\n\n";

    outSaida.textContent = resumo;
}

let btResumir = document.getElementById("btResumir");
btResumir.addEventListener("click",resumirLista)