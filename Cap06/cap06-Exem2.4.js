const DESCONTO = 0.2;

function calculaLimiteData(){
    let dia = document.getElementById("inDataInfracao").value; //Declarei uma variável denominada dia
    console.log(dia);

    let diaObjeto = new Date(dia) /*Declarei uma segunda variável, nela passei como paramêtro do construtor new Date a variável dia. */
    console.log(diaObjeto); //Usando o construtor, consigo alterar a data usando os métodos get e set.//
    
    let valorMulta = document.getElementById("inValorMulta").value;//Recebi o valor da multa e transformei em um número.
    valorMulta = Number(valorMulta);

    if(dia == "" || valorMulta == 0){ //Chequei se os campos foram preenchidos.
        alert("Por favor, prencha os campos corretamente.");
        return;
    }

    let diaHoje = diaObjeto.getDate()+1;/*Usei o método getDate para pegar o dia da variável diaObjeto, 
    adicionei +1, pois o método retornava o dia anterior, ou seja, dia-1*/
    
    let mesHoje = diaObjeto.getMonth()+4;/*Usei o método getMonth para pegar o mês da variável diaObjeto, 
    como esse método retornar o mês anterior, adicionei +4(+1 para o mês atual e +3 para os próximos 3 meses)*/
    
    let anoHoje = diaObjeto.getFullYear();/*Aqui, estou pegando o ano da variável.*/

    //Usei operador ternário para melhorar a exibição das informações na saída.
    let diaFormat = diaHoje <10? "0"+diaHoje : diaHoje;
    
    let mesFormat = mesHoje <10? "0"+mesHoje: mesHoje;

    outSaida.textContent = "Data Limite para Pagto com Desconto: "+diaFormat+"/"+mesFormat+"/"+anoHoje;

    let valorDesconto = valorMulta-(valorMulta*DESCONTO)

    outSaida2.textContent = "Valor com Desconto R$: "+valorDesconto.toFixed(2);

}

let btCalcula = document.getElementById("btCalcula");
btCalcula.addEventListener("click", calculaLimiteData)
