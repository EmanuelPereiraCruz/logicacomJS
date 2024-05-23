function gerarCracha(){
    let nome = document.getElementById("inNome").value;

    if(nome == "" || nome.indexOf(" ")==-1){
        alert("informe o nome completo!");
        return;
    }

    let priEspac = nome.indexOf(" ");

    let ultEspac = nome.lastIndexOf(" ");

    let cracha = nome.substr(0, priEspac) + nome.substr(ultEspac);
    

    outSaida.textContent = "Crachá: "+cracha;
}

let btGerar = document.getElementById("btGera");
btGerar.addEventListener("click", gerarCracha)