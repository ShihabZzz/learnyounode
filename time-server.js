const net = require('node:net');
const server = net.createServer((connection) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const date = now.getDate().toString().padStart(2, '0');
    const hour = now.getHours().toString().padStart(2, '0');
    const min = now.getMinutes().toString().padStart(2, '0');
    const data = `${year}-${month}-${date} ${hour}:${min}`
    connection.end(data + '\n');
})
server.listen(Number(process.argv[2]));