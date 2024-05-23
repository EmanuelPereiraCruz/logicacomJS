function criarRefe(){
    let nome = document.getElementById("inNome").value;

    if(nome == "" || nome.indexOf(" ")==-1){
        alert("Por favor, informe o nome completo.");
        return;
    }

    let nomesDivididos = nome.split(" ");

    let n = nomesDivididos.length;

    let nome1 = nomesDivididos[n-1];

    nome1 = nome1.toUpperCase()
    console.log(n)
    console.log(nome1);

    let nome2 = "";

    for(let a = 0; a<n-1; a++){
        nome2+=nomesDivididos[a].charAt(0)+".";
    }

    outSaida.textContent = "Bibliográfica: "+nome1+", "+nome2.toUpperCase();
}

let btGeraRefe = document.getElementById("btGeraRefe");
btGeraRefe.addEventListener("click", criarRefe)