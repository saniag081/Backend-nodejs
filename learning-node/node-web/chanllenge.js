const http = require('http');
const server = http.createServer();

server.on('request',(req,res)=>{
    if(req.method === 'POST' && req.url == '/fecha'){
        let body = [];
        let dias = { 
            uno: 'Monday',
            dos: 'Tuesday',    
            tres: 'Wednesday',
            cuatro: 'Thursday',
            cinco: 'Friday',
            seis: 'Saturday',
            siete: 'Sunday'
        };

        function semna(dia){
            switch (dia){
                case 1:
                    return dias.uno

                case 2:
                    return dias.dos

                case 3:
                    return dias.tres

                case 4:
                    return dias.cuatro

                case 5:
                    return dias.cinco

                case 6:
                    return dias.seis

                case 7:
                    return dias.siete                                                                                                                      
            }

        };

        function calcularDia(){
            const fechaNacimiento = body = Buffer.concat(body).toString();
            console.log(fechaNacimiento);
            const fechaDia = new Date(fechaNacimiento);
            console.log(fechaDia);
            const dia = fechaDia.getDay();
            console.log(dia);
            return semna(dia);
        }
        


        req.on('data', chumk =>{
            body.push(chumk);
        })

        .on('end',()=>{
            res.writeHead(200,{
                'Content-Type': 'text/plain'
            })

            const diaFinal = calcularDia();

            res.end(diaFinal);
        })

    }else{
        res.statusCode = 401;
        res.end();
    }
})


server.listen(2002);
console.log('servidor en: http://localhots:2002');