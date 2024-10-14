require("node:http")
  .createServer((_request, response) => {
    require("node:fs").createReadStream(process.argv[3]).pipe(response);
  })
  .listen(Number(process.argv[2]));
