function calculaArea(){
    let largura = document.getElementById("inLargura").value;
    largura = Number(largura);

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

    let areaDoRetangulo = altura*largura;

    outArea.textContent = "A área do retângulo é: "+areaDoRetangulo.toFixed(2);

}

let btCalculaArea = document.getElementById("btCalculaArea");
btCalculaArea.addEventListener("click", calculaArea);