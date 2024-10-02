const http = require('node:http');
http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
        console.log(chunk);
    })
});