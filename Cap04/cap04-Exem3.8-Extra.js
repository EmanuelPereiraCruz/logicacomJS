"use strict"
/*

CImprimir os números pares de 30 a 10:

Escreva um programa que use um laço for para imprimir todos os números pares de 30 a 10.
*/

let count = 30

console.log("|----Números pares entre 30 e 10----|"+"\n")
while(count>=10){
    if(count%2==0){
          console.log(count)
    }count--
}