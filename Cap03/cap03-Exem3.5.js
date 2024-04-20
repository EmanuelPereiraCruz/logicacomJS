function calculaNotasDisponiveis(){

    let saque = document.getElementById("inSaque").value;
    saque = Number(saque);

    if(saque<10 || saque%10 != 0){
        alert("O valor minimo para SAQUE é de 10,00! Por favor, informe um valor igual ou maior que 10,00 R$");
        return;
    }

    if(saque>=10 && saque<50){
        var qtdNotasDeDez = saque/10;
        qtdNotasDeDez = parseInt(qtdNotasDeDez);

        notasDe10.textContent = "Notas de R$ 10: "+qtdNotasDeDez;
    }

    if(saque>=50 && saque<100){
        var qtdNotasDeCinquenta = saque/50;
        qtdNotasDeCinquenta = parseInt(qtdNotasDeCinquenta);

        notasDe50.textContent = "Notas de R$ 50: "+qtdNotasDeCinquenta;
        var restoDeCinquenta = (saque%50)/10;

        if(restoDeCinquenta !=0){
            notasDe10.textContent = "Notas de R$ 10: "+restoDeCinquenta;
        }
    }

    if(saque>=100){
        var qtdNotasDeCem = saque/100;
        qtdNotasDeCem = parseInt(qtdNotasDeCem);

        notasDe100.textContent = "Notas de R$ 100: "+qtdNotasDeCem;
        var restoDeCem = saque%100;

        if(restoDeCem>=50){
            qtdNotasDeCinquenta = restoDeCem/50;
            qtdNotasDeCinquenta = parseInt(qtdNotasDeCinquenta);

            notasDe50.textContent = "Notas de R$ 50: "+qtdNotasDeCinquenta;

            qtdNotasDeDez = (restoDeCem%50)/10;
            
            if(qtdNotasDeDez!=0){
                notasDe10.textContent = "Notas de R$ 10: "+qtdNotasDeDez;
            };
            
        }else{
            qtdNotasDeDez = (restoDeCem/10);
            notasDe10.textContent = "Notas de R$ 10: "+qtdNotasDeDez;
        }

    }
}

let btNotas = document.getElementById("btNotas");
btNotas.addEventListener("click", calculaNotasDisponiveis);