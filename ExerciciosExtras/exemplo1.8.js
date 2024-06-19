function calculaVolumeCaixaRetangular(){
    let largura = document.getElementById("inLargura").value;
    largura = Number(largura);

    let altura = document.getElementById("inAltura").value;
    altura = Number(altura);

    let comprimento = document.getElementById("inComprimento").value;
    comprimento = Number(comprimento)

    if(largura =='' || altura == '' || comprimento ==''){
        alert("Por favor, preencha todos os campos.");
        inLargura.focus();
        return;
    }

    let volume = largura*altura*comprimento
    let inteiro = parseInt(volume)
    let diferenca = volume-inteiro

    if(diferenca>0){
        outSaida.textContent = 'O volume é igual a: '+volume.toFixed(2)+'m³'
    }else{
        outSaida.textContent = 'O volume é igual a: '+volume+'m³'
    }
    
}

let btCalculaVolume = document.getElementById("btCalculaVolume");
btCalculaVolume.addEventListener("click", calculaVolumeCaixaRetangular)