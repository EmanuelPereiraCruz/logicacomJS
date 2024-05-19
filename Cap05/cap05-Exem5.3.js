let carros = [];

function adicionarCarros(){
    let modelo = document.getElementById("InModelo").value;

    let preco = document.getElementById("inPreco").value;
    preco = Number(preco);

    if(modelo == "" || preco == 0){
        alert("Por favor, informe dados corretos.");
        return;
    }

    carros.push({modelo: modelo, preco: preco});

    InModelo.value="";
    inPreco.value="";
    InModelo.focus();

    listarCarros();
}

let btAdiciona = document.getElementById("btAdiciona");
btAdiciona.addEventListener("click", adicionarCarros)

function listarCarros(){
    if(carros.length == 0){
        alert("Não há carros na lista.");
        return;
    }


    var lista = "";

    for(let i=0; i<carros.length; i++){
        lista+=carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
    }

    document.getElementById("outLista").textContent = lista;
}

 let btListar = document.getElementById("btlistar");
 btListar.addEventListener("click", listarCarros);

 
 function filtrarCarros(){
    let maximo = Number(prompt("Qual o valor máximo que você deseja pagar?"));

    if(maximo == 0 || isNaN(maximo)){
        return;
    }

    var lista = "";

    for(let i=0; i<carros.length; i++){
        if(carros[i].preco <=maximo){
            lista+=carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
        }
    }

    console.log(lista)

    let outLista = document.getElementById("outLista");

    if(lista == ""){
        outLista.textContent = "Não há carros com preço até R$ "+maximo.toFixed(2);
    }else{
        outLista.textContent = "Carros com preço até R$ "+maximo.toFixed(2) + "\n---------------------------------------------\n" + lista;
    }
 }

 let btFiltrar = document.getElementById("btFiltrar");
 btFiltrar.addEventListener("click", filtrarCarros)