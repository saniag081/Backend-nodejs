const { Transform } = require('stream');

const transformStream = new Transform({
    transform(chunk,encoding,callback){
        console.log(chunk[0]);
        const text = chunk.toString().substr(0,1).toUpperCase();
        this.push(text + chunk);


        // const string = chunk.toString();

        callback();
    }
});

process.stdin.pipe(transformStream).pipe(process.stdout);