/*Crie uma função chamada calcularFatorial que recebe um número como parâmetro e retorna o fatorial desse número. 
Obtenha o número do usuário usando prompt e exiba o resultado com alert.*/

function calcularFatorial(numero) {
    let numeroFatorial = 1; // Inicializa com 1, não 0

    for (let a = numero; a >= 1; a--) {
        numeroFatorial *= a; // Multiplica pelo valor de 'a'
    }

    alert("O fatorial do número informado é: " + numeroFatorial);
}

let numeroInformado = Number(prompt("Por favor, informe um número para calcular o seu fatorial: "));

calcularFatorial(numeroInformado);
