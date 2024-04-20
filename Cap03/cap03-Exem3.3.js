function converteHoras(){
    let horasBR = document.getElementById("inHoraBR").value;
    horasBR = Number(horasBR);

    if(horasBR == "" || horasBR <0 || isNaN(horasBR)){
        alert("Por favor, informe uma hora válida!");
        return;
    }

    let horasFranca = horasBR+5;

    if(horasFranca>24){
        var horasAtualizado = horasFranca-24
        outSaida.textContent = "Hora na França: "+horasAtualizado.toFixed(2);
    }else{
        outSaida.textContent = "Hora na França: "+horasFranca.toFixed(2);
    }
}

let btConverte = document.getElementById("btHoraFranca");
btConverte.addEventListener("click", converteHoras);