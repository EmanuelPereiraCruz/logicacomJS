/*Crie uma função chamada gerarTabuada que recebe um número como parâmetro e retorna a tabuada desse número de 1 a 10. 
Obtenha o número do usuário usando prompt e exiba o resultado em um elemento HTML usando textContent.*/

function gerarTabuada (n){
    let tabuada = "";

    for(let a=1; a<=10; a++){
        tabuada+=a+" x "+n+" = "+a*n+"\n\n"
    }

    outSaida.textContent = "|----------TABUADA DO NÚMERO "+n+"----------|\n\n"+tabuada
}

let numero = Number(prompt("Por favor, informe um número"));
gerarTabuada(numero)