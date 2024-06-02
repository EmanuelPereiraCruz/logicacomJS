let itens = [];

function trocarItem(){
    let inPizza = document.getElementById("inPizza")
    let inBebida = document.getElementById("inBebida")

    if(rbPizza.checked){
        inBebida.className = "oculta";
        inPizza.className = "exibe";
    }else{
        inPizza.className = "oculta";
        inBebida.className = "exibe";
    }

    let rbPizza = document.getElementById("rbPizza");
    rbPizza.addEventListener("change",trocarItem)
}

function mostrarNumSabores(){
    if(rbPizza.checked){
        var pizza = inPizza.value;
        let num = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4;
        inDetalhes.placeholder = "Até "+num+"sabores";
    }
}

let detalhes = document.getElementById("inDetalhes");
detalhes.addEventListener("focus", mostrarNumSabores)

detalhes.addEventListener("blur", function(){
    inDetalhes.placeholder = "";    
})