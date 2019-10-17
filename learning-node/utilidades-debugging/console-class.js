const fs = require('fs');

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

//conola personalizada              donde imprimir
const consoleFile = new console.Console(out,err);

setInterval(() => {
    consoleFile.log(new Date());
    consoleFile.error(new Error('Opsss'));
}, 2000);