function geraEmail(){
    let nome = document.getElementById("inNome").value;

    if(nome == " " || nome.indexOf(" ")==-1){
        alert("Por favor, informe seu nome completo.");
        return
    }

    let partesDoNome = nome.split(" ");

    let email = "";

    let tamn = partesDoNome.length;

    for(let a=0; a<tamn-1; a++){
        email+=partesDoNome[a].charAt(0)

    }

    email +=partesDoNome[tamn-1] + "@empresa.com.br";

    outSaida.textContent = "E-mail: "+email.toLowerCase();
}

let btGeraEmail = document.getElementById("btGeraEmail");
btGeraEmail.addEventListener("click", geraEmail)