function converteTemp(){
    let temperaturaCelsius = document.getElementById("inCelsius").value;
    temperaturaCelsius = Number(temperaturaCelsius);

    if(temperaturaCelsius == "" || temperaturaCelsius <0){
        alert("Por favor, informe uma TEMPERATURA VÁLIDA.");
        return;
    }

    let conversaoDeTemperaturas = (temperaturaCelsius*9/5)+32;

    outResultado.textContent = "A temperatura em Fahrenheit é de: "+conversaoDeTemperaturas.toFixed(2)+" °F";
}

let btConverte = document.getElementById("btConverte");
btConverte.addEventListener("click", converteTemp);