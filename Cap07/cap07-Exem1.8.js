function geraSenha(){

    let nome = document.getElementById("inNome").value;

    let nomeValidado = validarNome(nome);

    if(nomeValidado==false){
        alert("Por favor, informe o nome completo.");
        return;
    }

    let sobrenomeValidado = obterSobrenome(nome);

    let nuneroDeVogais = contarVogais(nome);

    let formatNumero = nuneroDeVogais < 10 ? "0"+nuneroDeVogais : nuneroDeVogais
    outSaida.textContent = "Senha Inicial: "+sobrenomeValidado+formatNumero
}

let btGera = document.getElementById("btGera");
btGera.addEventListener("click", geraSenha)

function validarNome(nome){

    let nomeCompleto = true;
    
    if(nome==" " || nome.indexOf(" ")==-1){
        nomeCompleto = false
    }else{
        nomeCompleto = true
    }

    return nomeCompleto
}

function obterSobrenome(nome){
    let ultimoNome = '';

    let partesNome = nome.split(" ");

    let c = partesNome.length;
    
    ultimoNome = partesNome[c-1];

    return ultimoNome.toLowerCase();
}

function contarVogais(nome){
    const vogays = 'aeiou';

    let qtdVogais = 0;

    for(let a=0; a<nome.length; a++){
        const char = nome[a]
            if(vogays.includes(char)){
                qtdVogais++
        }
    }

    return qtdVogais
}


console.log("Emanuel, futuro desenvolvedor!")