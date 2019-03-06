const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'aplication/json' });

        let salida = {
            nombre: 'miguel',
            edad: 23,
            url: req.url

        }
        res.write(JSON.stringify(salida))
            // res.write('hola mundo')
        res.end();
    })
    .listen(8080)
console.log('escuchando en el 8080');