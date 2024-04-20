function verificaVelo(){
    let velociPermitida = document.getElementById("inVelocidadePer").value;
    velociPermitida = Number(velociPermitida);

    if(velociPermitida == "" || velociPermitida <0){
        alert("Por favor, informe uma velocidade válida!");
        return;
    }

    let velociCondutor = document.getElementById("inVelocidadeCond").value;
    velociCondutor = Number(velociCondutor);

    if(velociCondutor == "" || velociCondutor <0){
        alert("Por favor, informe uma velocidade válida!");
        return;
    }

    if(velociPermitida == velociCondutor){
        outSaida.textContent = "Sem Multa!"
    }

    let veloAte20 = velociPermitida*0.2+velociPermitida;

    if(velociCondutor>velociPermitida && velociCondutor<=veloAte20){
        outSaida.textContent = "Multa Leve!" 
    }

    if(velociCondutor>veloAte20){
        outSaida.textContent = "Multa Grave!" 
    }
}


let btVerifica = document.getElementById("btVerifica");
btVerifica.addEventListener("click", verificaVelo);