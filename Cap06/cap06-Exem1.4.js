let palavra = prompt("Palavra: ");

let tam = palavra.length;

let inverso = palavra.charAt(tam-1).toUpperCase();

for(let i=tam-2; i>=0; i--){
    inverso += palavra.charAt(i).toLowerCase();
}

alert("Palavra: "+palavra+"\n\nInvertida: "+inverso)