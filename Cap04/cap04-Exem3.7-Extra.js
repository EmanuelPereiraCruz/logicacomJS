"use strict" //Utilizei o use strict para assegurar a existência das variáveis

/*

Contagem regressiva de 100 a 1, exibindo apenas os números divisíveis por 7:

Escreva um programa que use um while para contar de 100 a 1 em ordem decrescente e exibir apenas os números divisíveis por 7.

*/

//Variável de inicialização - inicia com valor igual a 100
let count = 100;

console.log("|----Números divisíveis por 7 entre 100 e 1----|"+"\n")


while(count>0){
    //O if verifica se o número é divisível por 7. Caso seja verdadeiro, ele imprimi o número através do console.log
    
    if(count%7==0){
        console.log(count)
    }
    count--
}
