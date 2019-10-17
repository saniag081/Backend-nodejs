const util = require('util');

const helloPluto = util.deprecate(()=>{
    console.log('pluto')
},'pluto is deprecated, it is not a planet anymore');

helloPluto();

//node --inspect archivo