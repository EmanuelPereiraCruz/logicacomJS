/*

Soma dos números ímpares até 50:
Escreva um programa que use um laço for para calcular a soma de todos os números ímpares de 1 a 50 e exiba o resultado.

*/
let soma = 0

for(a=1; a<=50; a+=2){
    soma += a
    console.log(a)
}
console.log("\n")
console.log("A soma dos números é: "+soma)