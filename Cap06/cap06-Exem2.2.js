let hoje = new Date();
console.log(hoje)

let dia = hoje.getDate();
console.log(dia)

let mes = hoje.getMonth();
mes = mes + 1
console.log(mes)

let ano = hoje.getFullYear();
console.log(ano)

alert (hoje+"\n\nData: "+ dia + "/0"+ mes + "/" + ano);
