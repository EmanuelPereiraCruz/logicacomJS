/*A função Mostrar, nos permite capturar o nome da pessoa que está acessando nosso site e em seguida exibir esse nome junto de uma mensagem.
-> .value(Pega o valor do input com id "inNome")
-> O if válida se o campo foi realmente preenchido ou não.
-> text.Content por sua vez, permite que exibamos ao usuário uma informação. No exemplo, exibimos uma mensagem + nome do usuário
*/

function Mostrar(){
    let nome = document.getElementById("inNome").value;

    if(nome == ""){
        alert("Por favor, preencha o campo.");
        return;
    }
    outResposta.textContent = "Seja bem-vindo(a) "+nome;
}

let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", Mostrar)
