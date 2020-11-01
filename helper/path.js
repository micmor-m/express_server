//for old version of express
// const path = require("path");
// module.exports = path.dirname(process.mainModule.filename);

//for new version of express
const path = require("path");
module.exports = path.dirname(require.main.filename);
