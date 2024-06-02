let numeros = [];

function filtrarPares(arr_Num){
    let par_Numeros = [];

    for(let a = 0; a<arr_Num.length; a++){
        if(arr_Num[a]%2==0){
            par_Numeros.push(arr_Num[a])
        }
    }

    if(par_Numeros.length>=1){
        alert("Os números pares são: "+par_Numeros)
    }else{
        alert("Não existem números pares no Array.")
    }  
}

let continua = "SIM";

while(continua == "SIM"){
    let valor = Number(prompt("Por favor, informe um número: "));
    numeros.push(valor);
    continua = prompt("Deseja adicionar mais um número? Sim/Não").toUpperCase()
}

filtrarPares(numeros)