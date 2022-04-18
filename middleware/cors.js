const cors = require("cors");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);
