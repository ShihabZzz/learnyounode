require("./mymodule.js")(process.argv[2], process.argv[3], (error, files) => {
  error ? console.error(error) : files.forEach((file) => console.log(file));
});
