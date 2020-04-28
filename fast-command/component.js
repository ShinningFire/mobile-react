const path = require('path')
const fs = require('fs')
const { catalogueChecker } = require('./utils')
function component (pageName) {
    if(!catalogueChecker('../src/components')) {
        fs.mkdirSync(path.resolve(__dirname,'../src/components'))
    } 
    return path.resolve(__dirname,`../src/components/${pageName}`);

}
module.exports = {
    component
}