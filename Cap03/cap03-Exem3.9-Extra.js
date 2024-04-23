function checaIdade(){
    let idade = document.getElementById("inIdade").value;
    idade = Number(idade);

    if(idade<0 || idade == ""){
        alert("Por favor, preencha com uma idade válida!");
        return;

    }
    //Usando operador ternáro! :D
    
    let resultadoIdade = idade>=18 ? outSaida.textContent = "Você é maior de idade!" : outSaida.textContent = "Você é menor de idade!";

}

let btChecaIdade = document.getElementById("btChecaIdade");
btChecaIdade.addEventListener("click", checaIdade);