const path = require('path')
function normal (pageName) {
    return path.resolve(__dirname,`../src/pages/${pageName}`);
}
module.exports = {
    normal
}