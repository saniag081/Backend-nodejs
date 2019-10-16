const fs = require('fs');
const file = fs.createWriteStream('./big');

for(let i=0; i <= 1e6; i++){
    file.write('node js js js sj sjs ssj sjs sjs sjs sjs ssjsjsjssjssjsj');
}

file.end();