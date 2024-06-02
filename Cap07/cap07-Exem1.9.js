    function calcularDesconto(valor, taxaDesconto) {

        let valorDoDesconto = valor*taxaDesconto;
        
        return valorDoDesconto;
    }

    function exibeDesconto(){

        let preco = document.getElementById("inValor").value;
        preco = Number(preco);

        let desconto = 0;

        if (rdSim.checked) {
            desconto = (40 / 100);
        } else {
            desconto = (10 / 100);
        }

        let descontoConsulta = calcularDesconto(preco, desconto)

        let valorConsulta = preco - descontoConsulta;
        
        outSaida.textContent = "Desconto R$: " + descontoConsulta.toFixed(2);
        outSaida2.textContent = "A pagar R$: " + valorConsulta.toFixed(2);

    }
    let btCalcula = document.getElementById("btCalcula");
    btCalcula.addEventListener("click", exibeDesconto)