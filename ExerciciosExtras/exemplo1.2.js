function calculaAreaDoTriangulo(){
    let base_do_triangulo = document.getElementById("inBaseTriangulo").value;
    base_do_triangulo = Number(base_do_triangulo)
    console.log(base_do_triangulo)

    let altura_do_triangulo = document.getElementById("inAlturaTriangulo").value;
    altura_do_triangulo = Number(altura_do_triangulo)
    console.log(altura_do_triangulo)


    if(base_do_triangulo == "" || isNaN(base_do_triangulo) || altura_do_triangulo == "" || isNaN(altura_do_triangulo)){
        alert("Todos os campos devem ser preenchidos!")
        return;
    }

    let area_do_triangulo = (base_do_triangulo*altura_do_triangulo)/2

    outSaida.textContent = `Base do triângulo: ${base_do_triangulo}cm\n\nAltura do Triângulo: ${altura_do_triangulo}cm\n\nArea do triângulo:${area_do_triangulo}cm²`
}

let btCalculaArea = document.getElementById("btCalculaArea")
btCalculaArea.addEventListener("click", calculaAreaDoTriangulo)