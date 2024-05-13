function contarChinchilas(){
    let numeroDeChinchilas = document.getElementById("inNumero").value;
    numeroDeChinchilas = Number(numeroDeChinchilas);

    if(numeroDeChinchilas <=1 || numeroDeChinchilas == ""){
        alert("Número de Chinchilas inválido.");
        return;
    }

    let ano = document.getElementById("inAno").value;
    ano = Number(ano);

    if(ano <=0 || ano == ""){
        alert("O Ano informado é inválido.");
        return;
    }
        
    var quantidadeDeChinchilasAposPrimeiroAno = numeroDeChinchilas;

    outSaida.textContent = "1º Ano: " + numeroDeChinchilas + " Chinchilas\n";

    for(var i=2; i<=ano; i++){
        quantidadeDeChinchilasAposPrimeiroAno *= 3;
        outSaida.textContent += i + "º Ano: " + quantidadeDeChinchilasAposPrimeiroAno + " Chinchilas.\n";
    }
}

let btMostra = document.getElementById("btMostrar");
btMostra.addEventListener("click", contarChinchilas)
