function checaPalindromo(){
    let frase = document.getElementById("inTexto").value;
    
    if(frase=="" || frase.indexOf(" ")==-1){/*Aqui, verifico se foi inserido uma frase.
    O indexOf procurar no array a ocorrência de um vazio, caso ele não encontre irá retornar -1.
    
    Como o usuário deve informar uma frase, no mínimo, um espaço existirá nela. Caso o indexOf não encontre esse espaço, 
    significa que foi informado apenas uma palavra.*/
        
        alert("Por favor, preencha com uma frase.");
        return;
    }

    frase = frase.toUpperCase();//Aqui, uso o toUpperCase para deixar as letras maiúsculas.
    
    //Garantir que as letras estão em maiúsculo ou em minúsculo nos ajuda na comparação de strings.
    console.log(frase);

    let partesFrase = frase.split(" ");
    /*
    Usei o split para transformar a frase em um array de elementos, pois
    assim consigo criar uma nova string sem espaços entre as palavras. Também poderia ter usado o .replaceAll.
    */
    console.log(partesFrase)

    let fraseSemEspaco = "";//Defini essa variável que irá concatenar as palavras do array. Irei concatenar e remover os espaços.

    for(let a=0; a<partesFrase.length; a++){
        fraseSemEspaco+=partesFrase[a]
    }

    console.log("FRASE SEM ESPAÇO: "+fraseSemEspaco)

    let frase2 = "";//Essa variável irá armazenar o inverso da variável sem espaço.
    //Ou seja, se na variável fraseSemEspaco = AMAR
    //Na variável frase2 irá estar armazenado = RAMA

    let n = frase.length;

    for(let a=n; a>=0; a--){//Fiz um laço for indo do inicio ao fim.
        frase2+=fraseSemEspaco.charAt(a)
    }

    console.log("FRASE AVALIADA: "+frase2);

    //Usei um IF pra validar as frases e confirmar se ambas são iguais ou não.
    
    if(fraseSemEspaco===frase2){
        outSaida.textContent = frase + " é um Palíndromo."
    }else{
        outSaida.textContent = frase + " Não é um Palíndromo."
    }
}

let btCheca = document.getElementById("btCheca");
btCheca.addEventListener("click", checaPalindromo)
