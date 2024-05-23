const TAXA_MULTA = 2/100;

const TAXA_JUROS = 0.33/100;

function calculaMultaJuros(){
    let dataVencimento = document.getElementById("inDateVenc").value;

    let valor = document.getElementById("inValor").value;
    valor = Number(valor);

    let outMulta = document.getElementById("outMulta");

    let outJuros = document.getElementById("outJuros");

    let outTotal = document.getElementById("outTotal");

    if(dataVencimento == "" || valor == 0 || isNaN(valor)){
        alert("Informe corretamente os dados da conta.");
        return;
    }

    let hoje = new Date();

    let vencto = new Date();

    let partes = dataVencimento.split("-");
    vencto.setDate(Number(partes[2]));
    vencto.setMonth(Number(partes[1])-1);
    vencto.setFullYear(Number(partes[0]));

    let atraso = hoje - vencto;

    let multa = 0;
    let juros = 0;

    if(atraso>0){
        var dias = Math.round(atraso/86400000);
    }

    multa = valor*TAXA_MULTA;

    juros= (valor*TAXA_JUROS)*dias;

    let total = valor+multa+juros;

    outMulta.value = multa.toFixed(2);
    outJuros.value = juros.toFixed(2);
    outTotal.value = total.toFixed(2);
}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calculaMultaJuros)


function limparCampos(){
    location.reload();
}

let btNovaConta = document.getElementById("btNovaConta");
btNovaConta.addEventListener("click", limparCampos)