function mostrarDica(){
    let fruta = document.getElementById("inFruta").value.toUpperCase();
    if(fruta == ""){
        alert("Por favor, preencha o campo com o nome de uma FRUTA!");
        return;
    }

    let resposta = fruta.charAt(0);
    let estrelas = "*";
    let tam = fruta.length;

    for(let i=1; i<tam; i++){
        if(fruta.charAt(i)==fruta.charAt(0)){
            resposta+=fruta.charAt(0)
        }else{
            resposta+= "-";

        }estrelas+="*"
    }outDica.textContent = resposta;
    inFruta.value = estrelas;

}

let btMostrarDica = document.getElementById("btMostrarDica");
btMostrarDica.addEventListener("click", mostrarDica)