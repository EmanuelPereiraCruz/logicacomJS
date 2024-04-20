function calculaRaiz(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    if(numero =="" || numero <0 || isNaN(numero)){
        alert("Por favor, informe um número válido!");
        return;
    }

    let raizQuadrada = Math.sqrt(numero);

    if(Number.isInteger(raizQuadrada) == true ){
        outSaida.textContent = "A raiz quadrada do número informado é: "+raizQuadrada;

    }else{
        outSaida.textContent = "Não há raiz exata para o número: "+numero
    }
}

let btCalculaRaiz = document.getElementById("btCalculaRaiz");
btCalculaRaiz.addEventListener("click", calculaRaiz)