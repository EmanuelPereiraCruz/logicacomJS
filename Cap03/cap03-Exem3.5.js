function calculaNotasDisponiveis(){

    let saque = document.getElementById("inSaque").value;
    saque = Number(saque);

    /*Através desse if, verifico se o campo foi preenchido, ou seja, não está vazio.
    Também verifico se o número é um múltiplo de 10, assim asseguro que o usuário informará um valor que seja divisivel por 10.*/
    
    if(saque<10 || saque%10 != 0){
        alert("O valor minimo para SAQUE é de 10,00! Por favor, informe um valor igual ou maior que 10,00 R$");
        return;
    }

    /*Aqui, faço a validação para notas de 10. Caso o valor do saque esteja entre 10 e 50, divido esse valor por 10 para obter 
    a quantidade de notas de 10,00 disponíveis.*/
    
    if(saque>=10 && saque<50){
        var qtdNotasDeDez = saque/10;
        qtdNotasDeDez = parseInt(qtdNotasDeDez);

        notasDe10.textContent = "Notas de R$ 10: "+qtdNotasDeDez;
    }

    /*Nesse terceiro IF, faço uma validação para saques maiores que 50 porém, menores que 100.
    Primeiro, eu divido o valor do saque por 50, assim obtenho a quantidade de notas de 50,00 disponíveis.
    Após isso, usando o parseInt, obtenho apenas a parte inteira da divisão.
    
    Após isso, criei uma segunda variável chamada restoDeCinquenta, nela armazeno o valor do resto da divisão do saque por 50.
    Ou seja, se o saque foi de 80,00 o resto da divisão é 30,00 que irá ficar armazenado na variável: restoDeCinquenta.
    Após isso, pego esse valor e divido por 10 para obter apenas a quantidade de notas de 10,00.
    
    Por fim, uso outro if para verificar se a restoDeCinquenta tem valor diferente de 0. Assim, se o valor dela for 0, não será exibido nada.
    Porém, se o valor dela for diferente de 0, exibirá o texto.
    */
    
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
