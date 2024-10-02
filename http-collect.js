const http = require('node:http');
http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    let raw = '';
    response.on('data', (chunk) => {
        raw += chunk;
    });
    response.on('end', () => {
        console.log(raw.length);
        console.log(raw);
    });
});