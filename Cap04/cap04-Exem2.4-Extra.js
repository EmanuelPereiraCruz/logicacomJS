/**
 * 
 Média de 5 números:
Escreva um programa que use um laço for para calcular a média de 5 números informados pelo usuário 
através de prompt e exiba o resultado.
 
*/
let numero = 0

let soma = 0

for(let k=1; k<=5; k++){
    numero = Number(prompt("Por favor, informe um númer: "));
    soma = numero+soma
}

console.log("A soma dos números informados é: "+soma);

outSoma.textContent = "A soma dos números informados é: "+soma.toFixed(2);

let media = soma/5

console.log("A média dos números informados é: "+media);

outMedia.textContent = "A média dos números informados é: "+media.toFixed(2);



/*let numeros = [1, 4, 8, 2, 9]

let soma = 0

for(let i=0; i<numeros.length; i++){
    soma = soma+numeros[i]
}

console.log(soma)*/