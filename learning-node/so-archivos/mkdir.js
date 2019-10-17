const fs = require('fs');

//si no existe
fs.mkdir("Platzi/node-js", { recursive: true }, (err)=>{
    if(err){
        return console.log(err);
    }
});