let salario = Number(prompt('Por favor, informe seu salário bruto: '));
let salario_primeiro_desconto = salario-(salario*15/100);
let salario_segundo_desconto = salario_primeiro_desconto-(salario_primeiro_desconto*5/100)
alert('Seu salário liquido é: '+salario_segundo_desconto)