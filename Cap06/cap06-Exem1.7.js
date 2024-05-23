function verSenha(){
    let senha = document.getElementById("inSenha").value;

    let erros = []
    
    if(senha.length <8 && senha.length >15){
        erros.push("possuir entre 8 e 15 caracteres.");
    }

    if(senha.match(/[0-9]/g)==null){
        erros.push("possuir números(No mínimo 1)");
    }

    if(!senha.match(/[a-z]/g)){
        erros.push("possuir leras minúsculas(No mínimo 1)");
    }

    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z/]/g).length==1){
        erros.push("possuir leras maiúsculas(No mínimo 2)");
    }

    if(!senha.match(/[\W|_]/g)){
        erros.push("possuir símbolos(No mínimo 1)");
    }
    
    if(erros.length == 0){
        outSaida.textContent = "OK! Senha Válida"
    }else{
        outSaida.textContent = "Erro, a senha deve: "+erros.join(", ");
    }

}

let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verSenha)