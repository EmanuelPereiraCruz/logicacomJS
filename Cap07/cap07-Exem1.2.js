function calcularMedia(){

    if(arguments.length==0){//Se não foram passados argumentos.
        alert("Informe, no mínimo, uma nota");
    }

    let soma = 0 //Acumula a soma das notas;

    let numNotas = arguments.length;

    for(let i = 0; i<numNotas; i++){
        soma+=arguments[i]
    }

    var media = soma/numNotas;

    alert("Média das notas: "+media.toFixed(1));

}

calcularMedia(5,6,8);
calcularMedia(5,10);
calcularMedia(7.5, 10, 8, 9.5);
calcularMedia();