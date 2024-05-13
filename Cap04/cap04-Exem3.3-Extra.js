/*
Contagem de 1 a 100, exibindo apenas os números divisíveis por 5:
Escreva um programa que use um laço for para contar de 1 a 100 e exibir apenas os números divisíveis por 5.
*/
console.log("Números divisíveis por 5:"+"\n")
for(a=1; a<=100; a++){
    if(a%5==0){
        console.log(a)
    }
}