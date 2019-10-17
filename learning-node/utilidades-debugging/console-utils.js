//%s  se significa String
//%d  se significa numero
//%j     json

// console.log('Un %s y un %s',"pero","gato");


//alias
// console.info('hola mundo');
// console.warn('hello error');

//si hay un error retorna un verdadero falso
// console.assert(42 == '42');
// console.assert(42 === '42');

//nos indica la linea del error
// console.trace('Hello error');

const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('hello from foo');
//variable de entorno NODE_DEBUG=foo
