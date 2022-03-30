const path = require('path')
    fs = require('fs')
    ;

const packageJson = path.join(__dirname, 'package.json');
const contents = require(packageJson);

module.exports.getVersion = () => {
    return contents.version;
} 