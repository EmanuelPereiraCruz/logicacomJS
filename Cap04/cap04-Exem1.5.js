function preencherEstrelas(){
    let numero = document.getElementById("inNumeros").value;
    numero = Number(numero);

    if(numero == 0 || numero == ""){
        alert("Por favor, informe um número válido!");
        return;
    }

    let estrelas = "";

    for(var i = 1; i<=numero; i++){
        if(i%2==1){
            estrelas = estrelas + "*";
        }else{
            estrelas = estrelas + "-";
        }
    }

    outEspacos.textContent = estrelas
}

let btpreencher = document.getElementById("btPreencher");
btpreencher.addEventListener("click", preencherEstrelas)