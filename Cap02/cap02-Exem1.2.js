function calculaDuracao(){
    let titulo = document.getElementById("inTitulo").value;

    if (titulo == ""){
        alert("O campo título precisa ser preenchido.");
        return;
    }

    let duracao = document.getElementById("inDuracao").value;
    duracao = Number(duracao);

    if(duracao =="" || duracao <=0){
        alert("O campo duração precisa ser preenchido.");
        return;
    }

    let horas = duracao/60;
    horas = parseInt(horas);

    let minutos = duracao%60;

    outTitulo.textContent = titulo;
    outDuracao.textContent = horas + " hora(s) e "+ minutos +" minuto(s)";

}

let btConverte = document.getElementById("btConverte");
btConverte.addEventListener("click", calculaDuracao);
