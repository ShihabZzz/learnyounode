const http = require("node:http");
const server = http.createServer((request, response) => {
  if (request.method === "POST") {
    request.setEncoding("utf8");
    let raw = "";
    request.on("data", (chunk) => {
      raw += chunk;
    });
    request.on("end", () => {
      response.end(raw.toUpperCase());
    });
  }
});
server.listen(Number(process.argv[2]));
