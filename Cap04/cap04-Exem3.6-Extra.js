/*

Imprimir números de 1 a 20, pulando os números múltiplos de 3:
Escreva um programa que use um laço for para imprimir os números de 1 a 20, excluindo os números múltiplos de 3.

*/

//A variável de inicialização => a inicia em 1, e será acrescida até ser igual ou menor que 20.
//Para verificar se o número é divisível ou não poder 3, uso o operador %, com isso pego somente o resto da divisão do número por 3.

/*Se o resto da divisão de a por 3 for diferente(!=) de zero, imprimo esse valor usando o console.log. 
Caso seja falso, ou seja, a%3==0, o console.log não é realizado.*/

for(a=1; a<=20; a++){
    if(a%3!=0){
        console.log(a)
    }
}
