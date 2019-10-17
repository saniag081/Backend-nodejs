const fs = require('fs');

//archivos que estan dentro de un directorio
const file = fs.readdir(__dirname, (err,archivos)=>{
    if(err){
        return console.log(err);
    }    

    console.log(archivos);
});