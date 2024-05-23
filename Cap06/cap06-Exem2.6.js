function checaPalindromo(){
    let frase = document.getElementById("inTexto").value;
    
    if(frase=="" || frase.indexOf(" ")==-1){
        alert("Por favor, preencha com uma frase.");
        return;
    }

    frase = frase.toUpperCase();
    console.log(frase);

    let partesFrase = frase.split(" ");
    console.log(partesFrase)

    let fraseSemEspaco = "";

    for(let a=0; a<partesFrase.length; a++){
        fraseSemEspaco+=partesFrase[a]
    }

    console.log("FRASE SEM ESPAÇO: "+fraseSemEspaco)

    let frase2 = "";

    let n = frase.length;

    for(let a=n; a>=0; a--){
        frase2+=fraseSemEspaco.charAt(a)
    }

    console.log("FRASE AVALIADA: "+frase2);

    if(fraseSemEspaco===frase2){
        outSaida.textContent = frase + " é um Palíndromo."
    }else{
        outSaida.textContent = frase + " Não é um Palíndromo."
    }
}

let btCheca = document.getElementById("btCheca");
btCheca.addEventListener("click", checaPalindromo)