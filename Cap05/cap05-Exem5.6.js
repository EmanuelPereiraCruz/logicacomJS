let listaDeNumeros = [];

function adicionaNumeros(){
    let numero = document.getElementById("inNumero").value;
    numero = Number(numero);

    if(numero == ""){
        alert("Por favor, informe um número válido.");
        return;
    }

    if(!listaDeNumeros.includes(numero)){
        
        listaDeNumeros.push(numero);

        console.log(listaDeNumeros);
    
        inNumero.value = "";
    
        listaNumeros()

    }else{

        alert("Você não pode repetir os números cadastrados.");

        inNumero.value = "";

        return;
    }

}
   

let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionaNumeros)

function listaNumeros(){

    let listaNumerosCadastrados = ""

    for(i=0; i<listaDeNumeros.length; i++){
        listaNumerosCadastrados+=listaDeNumeros[i] + " ";
    }

    outSaidaNumeros.textContent = "Números: "+listaNumerosCadastrados
    console.log(typeof(listaNumerosCadastrados))

}

function verificaOrdem(){
    let crescente = true; //true //false
    
    for(a=0; a<listaDeNumeros.length-1; a++){
        if(listaDeNumeros[a] > listaDeNumeros[a+1]){
            crescente = false}
             
} 

if(crescente){
    console.log("Os números estão em ordem crescente.")
    outSaidaOrdem.textContent = "Os números estão em ordem crescente."
}

else{
    console.log("Os números não estão em ordem crescente.")
    outSaidaOrdem.textContent ="Os números não estão em ordem crescente."}
}

let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificaOrdem)