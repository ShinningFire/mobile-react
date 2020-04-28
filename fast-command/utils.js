const fs = require('fs')
function catalogueChecker (path) {
    let status = fs.existsSync(path)
    return {exist:status}
    
}
module.exports = {
    catalogueChecker
}