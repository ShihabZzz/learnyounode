const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, { withFileTypes: true }, (error, files) => {
        if (error) {
            return callback(error);
        }
        const returnFiles = [];
        files.forEach(file => {
            if (file.isFile() && path.extname(file.name) === '.' + ext) {
                returnFiles.push(file.name);
            }
        });
        callback(null, returnFiles);
    })
}