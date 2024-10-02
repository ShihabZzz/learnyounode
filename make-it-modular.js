const mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], (error, files) => {
    if (error) throw error;
    files.forEach(file => {
        console.log(file);
    });
})