let pacientes = [];

function adicionarPaciente(){
    let paciente_Nome = document.getElementById("inPaciente").value;
    if(paciente_Nome == ""){
        alert("Informe o nome do paciente.");
        return;
    }

    pacientes.push(paciente_Nome);

    let lista = "";

    for(i=0; i<pacientes.length; i++){
        lista +=(i+1) + ". " +pacientes[i]+"\n";
    }

    outLista.textContent = lista;

    inPaciente.value = "";
}

let btAdiciona = document.getElementById("btAdicionar");
btAdiciona.addEventListener("click", adicionarPaciente)

function adicionarPacienteUrgente(){
    let paciente_Nome = document.getElementById("inPaciente").value;
    if(paciente_Nome == ""){
        alert("Informe o nome do paciente.");
        return;
    }

    pacientes.unshift(paciente_Nome);

    let lista = "";

    for(i=0; i<pacientes.length; i++){
        lista +=(i+1) + ". " +pacientes[i]+"\n";
    }

    outLista.textContent = lista;
}

let btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarPacienteUrgente)

function atenderPaciente(){
    if(pacientes.length==0){
        alert("Não há paciente na fila de espera!");
        return;
    }

    let atender = pacientes.shift();
    outAtendimento.textContent = atender;

    let lista = "";

    for(i=0; i<pacientes.length; i++){
        lista +=(i+1) + ". " +pacientes[i]+"\n";
    }

    outLista.textContent = lista;
}

let btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente)