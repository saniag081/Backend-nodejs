const {Readable} = require('stream');

const readableStream = new Readable();

readableStream.push(`${0/0} `.repeat(10).concat('Batman,Batman!'));
//dejo de recibir datos 
readableStream.push(null);

readableStream.pipe(process.stdout);