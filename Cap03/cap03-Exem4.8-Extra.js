function verificaIdade(){
    let nome = document.getElementById("inNome").value;

    let idade = document.getElementById("inIdade").value;
    idade = Number(idade);

    let resultado = idade>=18 ? outSaida.textContent = nome+", você é maior de idade! Pode votar." : outSaida.textContent = nome+", você é menor de idade! Ainda não pode votar.";
}

let btCheca = document.getElementById("btChecaIdade");
btCheca.addEventListener("click", verificaIdade);