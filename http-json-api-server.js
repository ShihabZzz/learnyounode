const http = require("node:http");
const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const urlPath = url.pathname;
  const query = url.searchParams.has("iso");
  response.writeHead(200, { "Content-Type": "application/json" });
  if (urlPath == "/api/parsetime" && query) {
    const time = new Date(url.searchParams.get("iso"));
    const body = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
    };
    response.end(JSON.stringify(body));
  } else if (urlPath == "/api/unixtime" && query) {
    const time = new Date(url.searchParams.get("iso"));
    const body = {
      unixtime: time.getTime(),
    };
    response.end(JSON.stringify(body));
  }
});
server.listen(Number(process.argv[2]));
