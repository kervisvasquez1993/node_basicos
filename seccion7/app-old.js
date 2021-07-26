const http = require('http');
http.createServer((request, res) => 
{

 /*    res.setHeader('Content-Disposition', 'attachment: filename=lista.csv');
    res.writeHead(200, {'Content-type': 'application/json'});
 */

    res.write('hola mundo');

    res.end();
    
})
.listen(8000)

console.log('escuchando en el cuerpo')