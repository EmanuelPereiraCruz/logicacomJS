function calculaMedia(){
    let nome = document.getElementById("inNome").value;

    let nota1 = document.getElementById("inNota1").value;
    nota1 = Number(nota1);

    let nota2 = document.getElementById("inNota2").value;
    nota2 = Number(nota2);

    let mediaDasNotas = (nota1+nota2)/2;

    outMedia.textContent = "A média das suas notas é: "+mediaDasNotas.toFixed(2);
    
    /*O if verifica a situação do aluno para determinar se ele está aprovado ou não.
    Caso a média do aluno seja igual ou maior que 7, ele está aprovado!
    No entanto, caso a sua nota seja menor que 7, ele está reprovado.*/
    
    if(mediaDasNotas>=7){
        outSituacao.textContent = "Parabéns "+nome + "! Você foi aprovado(a).";
        outSituacao.style.color = "blue";
    }else{
        outSituacao.textContent = "Ops "+nome + "... Você foi reprovado(a).";
        outSituacao.style.color = "red";
    }
}

let btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calculaMedia);
