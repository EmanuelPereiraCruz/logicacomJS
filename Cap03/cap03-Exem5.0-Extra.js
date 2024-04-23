function calculaIMC(){
    let altura = document.getElementById("inAltura").value;
    altura = Number(altura);

    let peso = document.getElementById("inPeso").value;
    peso = Number(peso);

    let imc = peso/(altura*altura);

    if(imc<=18.5){
        outSaida.textContent = "Seu IMC é de: "+imc.toFixed(1)+" - Classificação: IMC Muito abaixo do peso."
    }else if(18.5<imc && imc<=24.9){
        outSaida.textContent = "Seu IMC é de: "+imc.toFixed(1)+" - Classificação: IMC Normal."
    }else if(25<=imc && imc<=29.9){
        outSaida.textContent = "Seu IMC é de: "+imc.toFixed(1)+" - Classificação: IMC Sobrepeso."
    }else if(30<=imc && imc<=34.9){
        outSaida.textContent = "Seu IMC é de: "+imc.toFixed(1)+" - Classificação: IMC Obeso Grau II."
    }else if(35<=imc && imc<=39.9){

    }else(
        outSaida.textContent = "Seu IMC é de: "+imc.toFixed(1)+"- Classificação: IMC Obeso Grau III ou Mórbido."
    )
}

let btCheca = document.getElementById("btCalculaIMC");
btCheca.addEventListener("click", calculaIMC)