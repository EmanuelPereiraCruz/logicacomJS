let anuncio = prompt("Anúncio: ");

let tam = anuncio.length;

let numPalavras = 0;

for( let a=0; a<tam; a++){
    if(anuncio.charAt(a) == " "){
        numPalavras++;
    }
}

alert("Anúncio: "+anuncio+ "\n\nNº Palavras: "+(numPalavras+1))