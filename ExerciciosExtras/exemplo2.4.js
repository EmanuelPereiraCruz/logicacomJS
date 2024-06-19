let numero = prompt('Por favor, informe um número: ')
let tamanho = numero.length;
console.log(tamanho)
let numero_inverso = '';

for(let a = tamanho-1; 0<=a; a--){
    numero_inverso+=numero[a]
}

alert('O inverso do número informado é: '+numero_inverso)