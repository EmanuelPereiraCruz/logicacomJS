/*

Soma dos números ímpares até 50:
Escreva um programa que use um laço for para calcular a soma de todos os números ímpares de 1 a 50 e exiba o resultado.

*/

/*

Na resolução desse exemplo, inicie criando uma variável denomaninada soma, nela irei armazenar a soma dos números ímpares.

O lao for inicia em 1 e vai até 50, e para pegar somente os números ímpares, na variável a estou acrescentando +2, com isso
asseguro de pegar somente os números ímpares. 

Por exemplo, se a inicia em 1, e estou adicionando +2 então, terei a=3,a=5,a=7 e assim sucessivamente. 

A variável soma está dentro do laço for, e ela soma o valor dela mesma com o valor de a, por isso -> soma +=a.
*/

let soma = 0

for(a=1; a<=50; a+=2){
    soma += a
    console.log(a)
}
console.log("\n")
console.log("A soma dos números é: "+soma)
