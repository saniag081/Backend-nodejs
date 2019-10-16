const {Writable} = require('stream');

const writableStream = new Writable({
    //pedazos de datos codificaion CB
    write(chumk,encoding,callback){
        console.log(chumk.toString());
        callback();
    }
});


//leer datos
process.stdin.pipe(writableStream);