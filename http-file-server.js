const fs = require('node:fs');
const http = require('node:http');

const server = http.createServer((request, response) => {
    fs.createReadStream(process.argv[3]).pipe(response);
});
server.listen(Number(process.argv[2]));