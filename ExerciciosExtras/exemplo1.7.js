function calculaVolumeCilindro(){
    let altura_do_cilindro = document.getElementById("inAlturaCilindro").value;
    altura_do_cilindro = Number(altura_do_cilindro);

    let raio_do_cilindro = document.getElementById("inRaioCilindro").value;
    raio_do_cilindro = Number(raio_do_cilindro)

    if(altura_do_cilindro == "" || raio_do_cilindro == ""){
        alert("Por favor, preencha todos os campos.")
        return;
    }
    const PI = 3.14159;

    let volume_do_cilindro = PI*altura_do_cilindro*(raio_do_cilindro**2);

    outSaida.textContent = "O volume do cilindro é igual a: "+volume_do_cilindro.toFixed(2)+"cm³"
}

let btCalcula = document.getElementById("btCalculaVolume");
btCalcula.addEventListener("click", calculaVolumeCilindro)