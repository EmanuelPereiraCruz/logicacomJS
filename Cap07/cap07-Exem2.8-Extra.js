/*Crie uma função chamada calcularMedia que recebe um array de números como parâmetro e retorna a média dos números. 

Use prompt para obter os números do usuário, separe-os por vírgula, converta-os em um array e exiba o resultado com alert.
*/
let numeros_Array = [];

function calcularMedia(arrNum){
    let soma_De_N = 0;

    let c = arrNum.length;

    for(let a= 0; a < c; a++ ){
        soma_De_N+=arrNum[a]
    }

    let media = soma_De_N/c;
    console.log("Média dos números "+media)

    alert("A média dos números informados é: "+media)
}
console.log("Array de Números: "+numeros_Array)

let continua = "SIM"

while(continua == "SIM"){
    let numero = Number(prompt("Informe um número, por favor: "))
    numeros_Array.push(numero);
    continua = prompt("Deseja adicionar mais algum número? Sim para adicionar | Não para parar").toUpperCase()
}

calcularMedia(numeros_Array)