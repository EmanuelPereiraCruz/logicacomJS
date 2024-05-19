let listaDeNumeros = [];

function cadastrarNumeros(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    listaDeNumeros.push(numero);

    inNumero.value = "";

    let soma = 0

    if(listaDeNumeros.length==5){

        btAdicionar.disabled = true;

        for(let a=0; a<listaDeNumeros.length; a++){
            soma += listaDeNumeros[a]
        }alert("A soma dos números informados é: "+soma);
    }
}

let btAdicionarNumero = document.getElementById("btAdicionar");
btAdicionarNumero.addEventListener("click", cadastrarNumeros)