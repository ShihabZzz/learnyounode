const fs = require('fs');
const path = require('path');
fs.readdir(process.argv[2], { withFileTypes: true }, (error, files) => {
    if (error) throw error;
    files.forEach(file => {
        if (file.isFile() && path.extname(file.name) === ('.' + process.argv[3]))
            console.log(file.name);
    });
})