function verificaTriangulo(){
    let ladoA = document.getElementById("inLadoA").value;
    ladoA = Number(ladoA);

    if(ladoA <0 || ladoA ==""){
        alert("Por favor, informe o Lado A do triângulo!");
        return;
    }

    let ladoB = document.getElementById("inLadoB").value;
    ladoB = Number(ladoB);

    if(ladoB <0 || ladoB ==""){
        alert("Por favor, informe o Lado B do triângulo!");
        return;
    }

    let ladoC = document.getElementById("inLadoC").value;
    ladoC = Number(ladoC);

    if(ladoC <0 || ladoC ==""){
        alert("Por favor, informe o Lado A do triângulo!");
        return;
    }

    if(ladoA+ladoB>ladoC && ladoB+ladoC>ladoA && ladoC+ladoA>ladoB){
        outTriangulo.textContent = "Lados podem formar um triângulo!"
    }else{
        outTriangulo.textContent = "Lados não podem formar um triângulo!";
        return;
    };

    if(ladoA==ladoB && ladoB==ladoC && ladoC==ladoA){
        outTipoDoTriangulo.textContent = "Tipo: Triângulo Equilátero."
    };

    if((ladoA==ladoB && ladoA!=ladoC || ladoB!=ladoC) || (ladoB==ladoC && ladoB!=ladoA || ladoC!=ladoA) || (ladoA==ladoC && ladoA!=ladoB || ladoC!=ladoB)){
        outTipoDoTriangulo.textContent = "Tipo: Triângulo Isóceles."
    };

    if(ladoA!=ladoB && ladoB!=ladoC && ladoC!=ladoA){
        outTipoDoTriangulo.textContent = "Tipo: Triângulo Escaleno."
    };
}

let btChecaLados = document.getElementById("btChecaLados");
btChecaLados.addEventListener("click", verificaTriangulo);