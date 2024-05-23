function criarRefe(){
    let nome = document.getElementById("inNome").value;

    if(nome == "" || nome.indexOf(" ")==-1){//Aqui, verifico se foi inserido um nome completo.
        alert("Por favor, informe o nome completo.");
        return;
    }

    let nomesDivididos = nome.split(" ");//Usando o método split, transformo uma string em um array. :)

    let n = nomesDivididos.length;//Aqui, verifico o comprimento do array usando o método .lenght

    let nome1 = nomesDivididos[n-1];/*Na variável nome1 estou armazenando o último nome do array.
    Para isso, usei a seguinte notação -> n-1, pois se o comprimento do array(n) é 10, seu último elemento é 9.*/

    nome1 = nome1.toUpperCase()//Usando o método toUpperCase, coloco as letras em maiúsculas.
    //Até aqui, já peguei o último nome e coloquei ele em maiúsculo.
    console.log(n)
    console.log(nome1);

    let nome2 = "";//Crie uma variável e iniciando deixei ela vazia.

    for(let a = 0; a<n-1; a++){/*Usando laço for, percorri o array de nomes divididos e para cada elemento da posição de (a), 
    usei o charAt(0) na posição zero para pegar a primeira letra do nome.
    
    Em seguida, concatenei tudo na variável nome2*/
        
        nome2+=nomesDivididos[a].charAt(0)+".";
    }

    outSaida.textContent = "Bibliográfica: "+nome1+", "+nome2.toUpperCase();
}

let btGeraRefe = document.getElementById("btGeraRefe");
btGeraRefe.addEventListener("click", criarRefe)
