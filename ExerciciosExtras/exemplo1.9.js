function calculaDobroTriploNumero(){
    let numero_informado = document.getElementById('inNumeroInformado').value
    numero_informado = Number(numero_informado);

    if(numero_informado == '' || isNaN(numero_informado)){
        alert('Por favor, preencha o campo com um número!');
        inNumeroInformado.focus();
        return;
    }

    let dobro_do_numero = numero_informado**2;
    let triplo_do_numero = numero_informado**3;

    outSaida.textContent = `Número Informado: ${numero_informado}\n\nDobro: ${dobro_do_numero}\n\nTriplo: ${triplo_do_numero}`
}

let btCalcula = document.getElementById("btCalcula");
btCalcula.addEventListener('click', calculaDobroTriploNumero)