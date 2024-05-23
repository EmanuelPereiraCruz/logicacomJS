let parcelas = Number(prompt("Quantas Parcelas: "));

let lista = "";
let dia, mes, ano, diaZero, mesZero;

let data = new Date();
console.log(data)

for(let i=1; i<=parcelas; i++){
    data.setMonth(data.getMonth()+1);
    dia = data.getDate();
    mes = data.getMonth()+1;
    ano = data.getFullYear();

    diaZero = dia <10 ? "0" + dia : dia;
    mesZero = mes <10 ? "0" + mes: mes;

    lista += i + "º Parcela: " +diaZero + "/" + mesZero + "/" + ano + "\n\n";
}

alert(lista)