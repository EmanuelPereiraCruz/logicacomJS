//Criei uma função para calcular a área do retangulo. 
function calculaArea(){
    let largura = document.getElementById("inLargura").value;
    largura = Number(largura);
    
    //Fazendo uma validação para assegurar que o campo largura foi preenchido corretamente.
    if(largura == "" || largura <0 || isNaN(largura)){
        alert("Por favor, informe uma largura VÁLIDA!");
        return;
    }

    let altura = document.getElementById("inAltura").value;
    altura = Number(altura);

    if(altura == "" || altura <0 || isNaN(altura)){
        alert("Por favor, informe uma largura VÁLIDA!");
        return;
    }

    //Calculando a área do retângulo:
    let areaDoRetangulo = altura*largura;

    outArea.textContent = "A área do retângulo é: "+areaDoRetangulo.toFixed(2);

}

let btCalculaArea = document.getElementById("btCalculaArea");
btCalculaArea.addEventListener("click", calculaArea);
