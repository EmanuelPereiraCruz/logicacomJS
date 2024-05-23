const DESCONTO = 0.2;

function calculaLimiteData(){
    let dia = document.getElementById("inDataInfracao").value;
    console.log(dia);

    let diaObjeto = new Date(dia)
    console.log(diaObjeto);

    let valorMulta = document.getElementById("inValorMulta").value;
    valorMulta = Number(valorMulta);

    if(dia == "" || valorMulta == 0){
        alert("Por favor, prencha os campos corretamente.");
        return;
    }

    let diaHoje = diaObjeto.getDate()+1;
    let mesHoje = diaObjeto.getMonth()+4;
    let anoHoje = diaObjeto.getFullYear();
    
    let diaFormat = diaHoje <10? "0"+diaHoje : diaHoje;
    
    let mesFormat = mesHoje <10? "0"+mesHoje: mesHoje;

    outSaida.textContent = "Data Limite para Pagto com Desconto: "+diaFormat+"/"+mesFormat+"/"+anoHoje;

    let valorDesconto = valorMulta-(valorMulta*DESCONTO)

    outSaida2.textContent = "Valor com Desconto R$: "+valorDesconto.toFixed(2);

}

let btCalcula = document.getElementById("btCalcula");
btCalcula.addEventListener("click", calculaLimiteData)
