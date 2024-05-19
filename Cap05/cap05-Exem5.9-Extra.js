let listaDeNumeros = []

function adicionarNumero(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    listaDeNumeros.push(numero);

    inNumero.value = "";

    if(listaDeNumeros.length == 5){

        btAdicionar.disabled = true;

        alert("Números Cadastrados: "+"\n"+listaDeNumeros)
    }

    console.log(listaDeNumeros);

}

let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNumero)