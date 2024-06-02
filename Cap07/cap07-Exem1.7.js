function retornaNome(){
    let nome = document.getElementById("inNome").value;

    if(nome == "" || nome.indexOf(" ")==-1){
        alert("Por favor, preencha seu nome completo.");
        return;
    }

    let n = nome.length;

    let traco = "";

    for(let a=0; a<n; a++){
        traco+="-"
    };

    console.log(traco);

    let idade = document.getElementById("inIdade").value;
    idade = Number(idade);

    let categIdade = categorizaAluno(idade)

    outSaida.textContent = nome + "\n"+traco+"\n" + "Categoria: "+categIdade;

}

let btCategoriza = document.getElementById("btCategoriza");
btCategoriza.addEventListener("click", retornaNome)

function categorizaAluno(idade){
    let classificacaoIdade = '';

    if(idade <=12){
        classificacaoIdade = "Infantil"
    }else if(idade>=13 && idade<=18){
        classificacaoIdade = "Juvenil"
    }else{
        classificacaoIdade = "Adulto"
    }
    return classificacaoIdade;
}