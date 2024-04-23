function verificaVelocidade(){
    let velocidade = document.getElementById("inVelocidade").value;
    velocidade = Number(velocidade);

    if(velocidade<0){
        alert("Por favor, informe uma velocidade válida.");
        return
    }

    let resultado = velocidade>=80 ? outSaida.textContent = "A velocidade permitida é de 80km/h. Você ultrapassou o limite de velocidade." : outSaida.textContent = "A velocidade permitida é de 80km/h. Você NÃO ultrapassou o limite de velocidade. :D"; 
}

let btChecaVelocidade = document.getElementById("btVerifica");
btChecaVelocidade.addEventListener("click", verificaVelocidade);