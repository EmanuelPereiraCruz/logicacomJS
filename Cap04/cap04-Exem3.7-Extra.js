"use strict"
/*

Contagem regressiva de 100 a 1, exibindo apenas os números divisíveis por 7:
Escreva um programa que use um laço for para contar de 100 a 1 em ordem decrescente e exibir apenas os números divisíveis por 7.

*/

//Usei while ao invés de laço for

let count = 100;

console.log("|----Números divisíveis por 7 entre 100 e 1----|"+"\n")

while(count>0){
    if(count%7==0){
        console.log(count)
    }
    count--
}