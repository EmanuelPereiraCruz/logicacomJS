    let clubes = [];

    function adicionarClube(){
    let nomeDoClube = document.getElementById("inClube").value;
                                            
    if(nomeDoClube == ""){
        alert("Por favor, preencha com um nome válido.");
        return;
    }
    
    clubes.push(nomeDoClube);

    console.log(clubes);

    inClube.value="";

    listarClubes()

    }

let btAdiciona = document.getElementById("btAdicionar");
btAdiciona.addEventListener("click", adicionarClube)

    function  listarClubes(){
    if(clubes.length==0){
        alert("Não existem clubes adicionados. \n\nPor favor, clique em ADICIONAR e insira um novo clube.");
        return;
    }

    var listaDeClubes =""

    for(let i=0; i<clubes.length; i++){
        listaDeClubes +=i+1+". "+ clubes[i]+"\n"
    }
    
    outSaida.textContent = listaDeClubes
    }

let btLista = document.getElementById("btListar");
btLista.addEventListener("click", listarClubes)

    function mostrarJogos(){
        if(clubes.length%2==1 && clubes.length>0){
            alert("Por favor, informe um número PAR de clubes.");
            return;

        }else{

            var listaDeClubes =""

            let copiaDeClubes = clubes.slice();
            copiaDeClubes.reverse()
        
            console.log(copiaDeClubes)
        
            for(let i=0; i<clubes.length/2; i++){
                listaDeClubes += (clubes[i] +" x "+ copiaDeClubes[i] + '\n');
            }

        } outSaida.textContent = listaDeClubes
}

let btMostraJogo = document.getElementById("btMostrarJogos");
btMostraJogo.addEventListener("click", mostrarJogos)