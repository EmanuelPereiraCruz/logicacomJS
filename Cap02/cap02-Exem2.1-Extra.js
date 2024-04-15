function calcularVolume(){
    let raioDaesfera = document.getElementById("inRaio").value;
    raioDaesfera = Number(raioDaesfera);

    if(raioDaesfera == "" || raioDaesfera <0){
        alert("Por favor, informe um RAIO VÁLIDO!");
        return;
    }

    let volumeDaEsfera = (raioDaesfera**3)*3.14*4/3

    outSaida.textContent = "O volume da Esfera é de: "+volumeDaEsfera.toFixed(2);
}

let btCalculaVolume = document.getElementById("btCalculaVolume");
btCalculaVolume.addEventListener("click", calcularVolume);