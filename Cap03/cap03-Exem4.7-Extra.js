function comparaNotas(){
    let nome1 = document.getElementById("inNome1").value;

    let nota1 = document.getElementById("inNota1").value;
    nota1 = Number(nota1);

    if(nota1<0){
        alert("Nota 1 Inválida!")
    }

    let nome2 = document.getElementById("inNome2").value;

    let nota2 = document.getElementById("inNota2").value;
    nota2 = Number(nota2);

    if(nota2<0){
        alert("Nota 2 Inválida!")
    }

    let nome3 = document.getElementById("inNome3").value;

    let nota3 = document.getElementById("inNota3").value;
    nota3 = Number(nota3);

    if(nota1<0){
        alert("Nota 3 Inválida!")
    }

    if(nota1>nota2 && nota1>nota3){
        outSaida.textContent = nome1+" obteve a maior nota! Sua nota foi: "+nota1;
    }

    else if(nota2>nota1 && nota2>nota3){
        outSaida.textContent = nome2+" obteve a maior nota! Sua nota foi: "+nota2;
    }

    else if(nota3>nota1 && nota3>nota2){
        outSaida.textContent = nome3+" obteve a maior nota! Sua nota foi: "+nota3;
    }

    else{
        outSaida.textContent = "Os alunos tiveram a mesma nota!";
    }
}

let btChecaNotas = document.getElementById("btChecaNotas");
btChecaNotas.addEventListener("click", comparaNotas)