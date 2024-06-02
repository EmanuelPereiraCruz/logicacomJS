function inverterString (nome){

    let nomeInvertido = "";
    

    let tamanho = nome.length;
    console.log("Tamanho: "+tamanho);

    for(let a = tamanho; a >= 0; a--){
        nomeInvertido+=nome.charAt(a)
    }

    console.log("Nome Invertido: "+nomeInvertido)

    alert("Nome informado: "+nome+"\n\n"+"Nome Invertido: "+nomeInvertido)
}

let nomeInformado = prompt("Por favor, informe um nome: ");
console.log("Nome Informado: "+nomeInformado)

inverterString(nomeInformado)