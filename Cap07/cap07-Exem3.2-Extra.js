function calcularPotencia(base, expo){
    let potencia = base**expo

    alert("A base "+base+" elevado ao expoente "+expo+" tem como resultado: "+potencia)
}

let num1 = Number(prompt("Por favor, informe o valor da base: "));

let num2 = Number(prompt("Por favor, informe o valor da potência: "));

calcularPotencia(num1, num2)