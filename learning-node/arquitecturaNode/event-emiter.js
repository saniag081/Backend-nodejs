const EventEmmiter = require('events');

class Logger extends EventEmmiter{
    execute(cb){
        console.log('Before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('After');
    }
}

const logger = new Logger();

logger.on('start',()=>{ 
    console.log('Starting');
})

logger.on('finish',()=>{
    console.log('Finish');
})

logger.on('finish',()=>{
    console.log('It is Donde');
})

logger.execute( () => setTimeout(()=>console.log('Hello word'),2000) );