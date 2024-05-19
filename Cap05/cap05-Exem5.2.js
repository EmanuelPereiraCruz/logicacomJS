        let erros = []

        let sorteado = Math.floor(Math.random()*100)+1;
        console.log(sorteado)

        const CHANCES = 6;

        function apostarNumero(){
            let numero = document.getElementById("inNumero").value;
            numero = Number(numero);

            if(numero <=0 || numero >100){
                alert("Por favor, informe um número válido.");
                inNumero.focus();
                return;
            }

            if(numero == sorteado){
                
                alert("Parabéns, você acertou!");
                btApostar.disable = true;
                btJogar.className = "exibe";

                outDica.textContent = "Parabéns!! Número sorteado: "+sorteado;

            }else{
                if(erros.indexOf(numero)>=0){
                    alert("Você já apostou o número "+numero+ ". Tente outra vez");
                }else{
                    erros.push(numero);
                    var numErros = erros.length;
                }
                let numChances = CHANCES - numErros;

                outErros.textContent = numErros + "(" + erros.join(", ") + ")";
                
                outChances.textContent = numChances;

                if(numChances == 0){
                    alert("Suas chances ACABARAM!");
                    btApostar.disable = true;
                    btJogar.className = "exibe";
                    outDica.textContent = "Gamer Over!! Número sorteado: "+sorteado;
                }else{
                    var dica = numero < sorteado ? "maior" : "menor";
                    outDica.textContent = "Dica: Tente um número "+dica+" que "+numero;
                }
            }

            inNumero.value="";
            inNumero.focus();

        }

        let btApostar = document.getElementById("btApostar");
        btApostar.addEventListener("click", apostarNumero)

        function jogarNovamente(){
            location.reload();
        }

        let btJogar = document.getElementById("btJogar");
        btJogar.addEventListener("click", jogarNovamente)