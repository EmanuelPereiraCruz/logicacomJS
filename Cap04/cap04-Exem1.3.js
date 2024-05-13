var numContas = 0;
var valTotal = 0;
var resposta = "";

function registraConta(){
    let descricao = document.getElementById("inDescricao").value;
    let valor = document.getElementById("inValor").value;
    valor = Number(valor);

    if(descricao == "" || valor == 0 || isNaN(valor)){
        alert("Por favor, preencha os campos corretamente!")
    }

    numContas++;
    valTotal = valTotal+valor;

    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";

    outListaContas.textContent = resposta + "--------------------------------------"
    outTotal.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);
}

let btRegistra = document.getElementById("btRegistrar");
btRegistra.addEventListener("click", registraConta)