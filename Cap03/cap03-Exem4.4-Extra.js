function verificaNotas(){
    let nota1 = document.getElementById("inNota1").value;
    nota1 = Number(nota1);

    let nota2 = document.getElementById("inNota2").value;
    nota2 = Number(nota2);

    let nota3 = document.getElementById("inNota3").value;
    nota3 = Number(nota3);

    let situacaoAcademica = ((nota1+nota2+nota3)/3)>=7 ? outSaida.textContent = "Parabéns, você está APROVADO!" : outSaida.textContent = "Infelizmente você está REPROVADO!";
}

let btVerificaSituacao = document.getElementById("btChecaNotas");
btVerificaSituacao.addEventListener("click", verificaNotas)