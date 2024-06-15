function calculaSalarioLiquido(){
    let horas_trabalhadas = document.getElementById("inHorasTrabalhadas").value;
    horas_trabalhadas = Number(horas_trabalhadas);

    let valor_da_hora_trabalhada = document.getElementById("inValorHorasTrabalhadas").value;
    valor_da_hora_trabalhada = Number(valor_da_hora_trabalhada);

    let percentual_de_desconto = document.getElementById("inPercentualDesconto").value;
    percentual_de_desconto = Number(percentual_de_desconto)

    if(horas_trabalhadas == "" || valor_da_hora_trabalhada == "" || percentual_de_desconto == ""){
        alert("Por favor, preencha todos os campos.")
        return
    }

    let salario_bruto = horas_trabalhadas*valor_da_hora_trabalhada;
    let total_desconto = (percentual_de_desconto/100)*salario_bruto
    let salario_liquido = salario_bruto-total_desconto
    outSaida.textContent = `Horas Trabalhadas: ${horas_trabalhadas} horas\n\nSalario Bruto: R$ ${salario_bruto}\n\nDesconto: ${percentual_de_desconto}%\n\nSalario Liquido: R$ ${salario_liquido}.`
}
 
let btCalculaSalario = document.getElementById('btCalculaSalario');
btCalculaSalario.addEventListener('click', calculaSalarioLiquido)