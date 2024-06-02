let arrayDeNumeros = [];

function somarArray(arrNumeros){
    let soma = 0;

    for(let a=0; a<arrNumeros.length; a++){
        soma+=arrNumeros[a]
    }

    alert("A soma dos números do Array é: "+soma)
}

let continua = "SIM"

while(continua=="SIM"){
    let numero = Number(prompt("Por favor, informe um número"))
    arrayDeNumeros.push(numero);
    continua = prompt("Deseja continuar adicionando número?").toUpperCase()
}


console.log(arrayDeNumeros)

somarArray(arrayDeNumeros)