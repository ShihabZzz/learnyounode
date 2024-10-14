require("fs").readFile(process.argv[2], "utf8", (error, data) => {
  error ? console.error(error) : console.log(data.split("\n").length - 1);
});
