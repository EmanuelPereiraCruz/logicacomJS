function checaTemperatura(){
    let temperatura = document.getElementById("inTemperatura").value;
    temperatura = Number(temperatura);

    if(temperatura<10){
        outSaida.textContent = "Está frio a temperatura." 
    }else if(temperatura>=10 && temperatura<30){
        outSaida.textContent = "Está moderado a temperatura." 
    }else{
        outSaida.textContent = "Está quente a temperatura." 
    }
}

let btCheca = document.getElementById("btCheca");
btCheca.addEventListener("click", checaTemperatura)