function verificaAposentadoria(){
    let sexoFeminino = document.getElementById("rbFeminino").checked;
    let sexoMasculino = document.getElementById("rbMasculino").checked;
    let idade = document.getElementById("inIdade").value;

    if(idade<0){
        alert("Por favor, informe uma idade válida!");
        return
    }

    if(sexoFeminino && idade>=60){
        outSaida.textContent = "Parabéns, você já pode se aposentar! :D"
    }else if(sexoMasculino && idade>=65){
        outSaida.textContent = "Parabéns, você já pode se aposentar! :D"
    }else(
        outSaida.textContent = "Infelizmente, você ainda não pode se aposentar."
    )
}

let btChecaAposento = document.getElementById("btChecaApos");
btChecaAposento.addEventListener("click", verificaAposentadoria)