function calculaDuracao(){
    //Criei uma variável chamada titulo. nela armazeno o valor recebido no input com id: inTitulo
    let titulo = document.getElementById("inTitulo").value;

    //Através desse if, faço uma valiação para assegurar que o campo foi preenchido. Caso esteja vazio, o alert será realizado.
    if (titulo == ""){
        alert("O campo título precisa ser preenchido.");
        return;
    }

    //Nessa segunda parte, além de criar a variável que armazena o valor recebido no input, também precisei converte-la em number
    let duracao = document.getElementById("inDuracao").value;
    duracao = Number(duracao);

    if(duracao =="" || duracao <=0){
        alert("O campo duração precisa ser preenchido.");
        return;
    }

    /*Para calcular a quantidade de horas, fiz primeiro uma divisão por 60, assim transformando a duração em horas e não mais minutos.
    Em seguida, como precisava acessar somente a parte inteira da hora, usei o método parseInt para me ajudar com isso.
    Resumindo: Se a duração é 90 minutos, quando dividir por 60 irei ter 90/60 -> 1,5.
    Usando o método parseInt, eu consigo pegar somente a parte inteira desse resultado que vou chamar de Q.
    Portanto, q = 1.
    */
    let horas = duracao/60;
    horas = parseInt(horas);

    /*Já para minutos, usei novamente a divisão, porém pegando o resto dessa vez.
    90%60 tem como resto 30, portanto 30 minutos.*/
    let minutos = duracao%60;

    outTitulo.textContent = titulo;
    outDuracao.textContent = horas + " hora(s) e "+ minutos +" minuto(s)";

}

let btConverte = document.getElementById("btConverte");
btConverte.addEventListener("click", calculaDuracao);
