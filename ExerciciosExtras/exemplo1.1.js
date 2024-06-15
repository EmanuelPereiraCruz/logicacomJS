//Calcula a área de uma circuferencia
//Formula da área: PI* raio(ao quadrado)

function calcularAreaCircunferencia(){
    let raio_da_circunferencia = document.getElementById("inRaio").value;
    raio_da_circunferencia = Number(raio_da_circunferencia)

    if(raio_da_circunferencia == ""){
        alert("Por favor, preencha o campo.")
        inRaio.focus()
        return;
    }

    const PI = 3.14 //Valor fixado pelo exercício

    let area_da_circunferencia = PI * (raio_da_circunferencia**2)

    outSaida.textContent = `Raio da Circunferência: ${raio_da_circunferencia}m\n\nÁrea da Circunferência: ${area_da_circunferencia}m²`

}



let btCalculaArea = document.getElementById("btCalculaArea");
btCalculaArea.addEventListener("click", calcularAreaCircunferencia)
