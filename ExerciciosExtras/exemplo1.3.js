function concatenaNomeComSobrenome(){
    let nome = document.getElementById("inNome").value;

    let sobrenome = document.getElementById("inSobrenome").value;

    if(nome == "" || sobrenome == ""){
        alert("Por favor, preencha todos os campos.");
        return
    }

    let nome_concatenado = `Nome Completo: ${nome} ${sobrenome}`;
    
    outSaida.textContent = nome_concatenado
}

let btConcatena = document.getElementById("btConcatena");
btConcatena.addEventListener("click", concatenaNomeComSobrenome)