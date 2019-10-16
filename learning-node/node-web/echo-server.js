const http = require('http');
const server = http.createServer();

server.on('request',(req,res)=>{
    // res.statusCode = 200;
    // res.setHeader('Content-Type','text/plain');
    if(req.method === 'POST' && req.url == '/echo'){
        let body = [];

        req.on('data', chumk =>{
            body.push(chumk);
            
        })
        //evento "end" acaba de recibir los datos
        .on('end',()=>{
            res.writeHead(200,{
                'Content-Type': 'text/plain'
            })
            //String
            body = Buffer.concat(body).toString();
            res.end(body);

        })

    }else{
        res.statusCode = 404;
        res.end();
    }

})

server.listen(8001);
console.log('Servidor en la url http://localhost:8001');