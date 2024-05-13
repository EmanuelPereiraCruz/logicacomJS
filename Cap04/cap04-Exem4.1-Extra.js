"use strict"

/*

Contagem regressiva de 50 a 10, exibindo apenas os números múltiplos de 3:
Escreva um programa que use um laço for para contar de 50 a 10 em ordem decrescente e exibir apenas os números múltiplos de 3.

*/

let a = 50;

while(a>=10){
    if(a%3==0){
        console.log(a);
    }
    a--
}