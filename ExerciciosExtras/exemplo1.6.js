function converteParaFahrenheit(){
    let opcao_celsius = document.getElementById("temperaturaCelsius").checked;
    let opcao_fahrenheit = document.getElementById("temperaturaFahrenheit").checked;
    let temperatura = document.getElementById("inTemperatura").value;
    
    if(temperatura =="" || isNaN(temperatura)){
        alert("Por favor, preencha o campo corretamente.");
        return;
    }

    if(opcao_celsius){
        let temperatura_em_celsius = (temperatura-32)*(5/9);
        outSaida.textContent = 'A temperatura em Celsius é igual a: '+temperatura_em_celsius.toFixed(2);
    }

    else{
         let temperatura_em_fahrenheit = (temperatura*9+160)/5;
         outSaida.textContent = 'A temperatura em Fahrenheit é igual a: '+temperatura_em_fahrenheit.toFixed(2)
    }
}

let btConverte = document.getElementById('btConverte');
btConverte.addEventListener('click', converteParaFahrenheit)