const http = require('node:http');
const fetch = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            response.setEncoding('utf8');
            let raw = '';
            response.on('data', (chunk) => {
                raw += chunk;
            });
            response.on('end', () => {
                resolve(raw);
            });
            response.on('error', () => {
                reject(error);
            })
        });
    })
};
(async () => {
    const urls = process.argv.slice(2);
    const fetchPromises = urls.map((url) => fetch(url));
    dataFiles = await Promise.all(fetchPromises);
    dataFiles.forEach(data => {
        console.log(data);
    });
})();