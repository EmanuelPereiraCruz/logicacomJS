/*

Imprimir números pares até 10:
Escreva um programa que use um laço for para imprimir todos os números pares de 1 a 10.

*/
let numerosPares = []
for (i=0; i<=10; i++){
    if(i%2==0){
        numerosPares.push(i)
    }
}

console.log(numerosPares)