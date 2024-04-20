function calculaRaiz(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    //Este if valida o campo número, com isso estou buscando assegurar que ele seja preenchido corretamente.
    if(numero =="" || numero <0 || isNaN(numero)){
        alert("Por favor, informe um número válido!");
        return;
    }

    /*Usando o método Math.sqrt, consigo calcular a raiz quadrada do número informado pelo usuário.
    -Por exemplo, se o usuário informou o número = 25, a raiz quadrada dele é 5.*/
    
    let raizQuadrada = Math.sqrt(numero);

    /*Usando o método Number.isInteger, verifico se a raiz quadrada é ou não um número inteiro.
    O resultado desse método é um boolean, portanto, ele vai me retornar verdadeiro ou falso.
    Ainda a respeito do exemplo acima, se a raiz de 25 é 5, o método Number.isInteger irá me retornar um true.
    Porém, se o número informado pelo usuário fosse 26, ele me retornaria um false, pois 26 não tem raiz exata.
    */
    
    if(Number.isInteger(raizQuadrada) == true ){
        outSaida.textContent = "A raiz quadrada do número informado é: "+raizQuadrada;

    }else{
        outSaida.textContent = "Não há raiz exata para o número: "+numero
    }
}

let btCalculaRaiz = document.getElementById("btCalculaRaiz");
btCalculaRaiz.addEventListener("click", calculaRaiz)
