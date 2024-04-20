function calcularPeso(){
    let nome = document.getElementById("inNome").value;

    let sexoMasculino = document.getElementById("rbMasculino").checked;
    let sexoFeminino = document.getElementById("rbFeminino").checked;

    let altura = document.getElementById("inAltura").value;
    altura = Number(altura);

    if(nome =="" || (sexoMasculino == false && sexoFeminino == false)){
        alert("Por favor, informe seu nome e selecione um sexo.");
        return;
    }

    if(altura == 0 || isNaN(altura)){
        alert("Por favor, informe uma altura correta!");
        return;
    }
    /*No trecho de código abaixo, defini a variável peso usando o let, porém criando ela fora do if.
    Caso a variável fosse criada dento do if, deveriamos usar o var, ao invés do let, pois com isso, teriamos 
    uma variável global. Ou seja, se declaramos dentro do if uma variável usando o let, n conseguimos, posteriormente, acessa-la.
    No entanto, se declararmos dentro do if a variável usando o var, conseguimos acessa-la posteriormente, ou seja, fora do if. */
    //Exemplo usando let para criar a variável

    /*let peso;

    if(sexoMasculino){
        peso = 22* Math.pow(altura, 2);
    }else{
        peso = 21* Math.pow(altura, 2);
    }

    outResposta.textContent = nome + ": Seu peso ideal é "+ peso.toFixed(2) + " kg";*/

    //Mesmo exemplo, porém usando var
    if(sexoMasculino){
        var peso = 22* Math.pow(altura, 2);
    }else{
        var peso = 21* Math.pow(altura, 2);
    }

    outResposta.textContent = nome + ": Seu peso ideal é "+ peso.toFixed(2) + " kg";

}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);


function limparCampos(){
    location.reload();
}

let btLimparCampos = document.getElementById("btLimparCampos");
btLimparCampos.addEventListener("click", limparCampos);