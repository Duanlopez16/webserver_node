import http from 'http';

http.createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        const persona = {
            id: 1,
            name: 'hola'
        };
        response.write(JSON.stringify(persona));
        response.end();
    })
    .listen('8080');

console.log('Escuchando desde el puerto 8080');