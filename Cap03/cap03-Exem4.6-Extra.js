function checaIdade(){
    let idade = document.getElementById("inIdade").value;
    idade = Number(idade);
    console.log(idade)

    if(idade<0){
        alert("Por favor, informe uma idade válida!");
        return
    }

    if(idade>=0 && idade<=12){
        outSaida.textContent = "De acordo com sua idade, você é: CRIANÇA." 
    }else if(idade>=13 && idade<=17){
        outSaida.textContent = "De acordo com sua idade, você é: ADOLESCENTE." 
    }else if(idade>=18 && idade<=65){
        outSaida.textContent = "De acordo com sua idade, você é: ADULTO." 
    }else{
        outSaida.textContent = "De acordo com sua idade, você é: IDOSO." 
    }
}

let btChecaIdade = document.getElementById("btChecaIdade");
btChecaIdade.addEventListener("click", checaIdade)