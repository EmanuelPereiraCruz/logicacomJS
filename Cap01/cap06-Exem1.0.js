function checaPalavra(){
    let palavra = document.getElementById("inPalavra").value;
    
    if(palavra==""){
        alert("Por favor, informe uma palavra");
        return;
    }

    let letras = '';

    for(let a=0; a<palavra.length; a++){
        letras+=palavra.charAt(a)+"\n"
    }
    outSaida.textContent = "O comprimento da palavra informada é: "+palavra.length+"\n";

    outSaida2.textContent = "Usando charAt + Laço For para imprimir as letras do nome de acordo com o indice. "+"\n\n"+letras
}

let btPalavra= document.getElementById("btPalavra");
btPalavra.addEventListener('click', checaPalavra)