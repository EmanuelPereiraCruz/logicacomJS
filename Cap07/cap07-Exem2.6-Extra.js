function verificarPalindromo(nome_str){
    console.log("Palavra informada - "+nome_str);

    let nome_Invertido = "";

    let tamanho = nome_str.length;

    for(let a = tamanho; a>=0; a-- ){
        nome_Invertido+=nome_str.charAt(a)
    }
    console.log("Palavra Invertida: "+nome_Invertido)

    if(nome_str===nome_Invertido){
       alert("SIM - as palavras são palindromos") 
    }else{
        alert("Não - as palavras não são palindromos") 
    }
}

let palavra = prompt("Por favor, informe uma palavra: ")
palavra = palavra.toUpperCase();
verificarPalindromo(palavra)