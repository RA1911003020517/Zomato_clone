"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _connection = _interopRequireDefault(require("./database/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//database connection
_dotenv.default.config();

const app = (0, _express.default)();
app.use(_express.default.json());
app.get("/", (req, res) => {
  res.json({
    message: "Server is running"
  });
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server is running !");
  (0, _connection.default)().then(() => {
    console.log("DB is connected");
  }).catch(error => {
    console.log("server is runninng , but database connection failed");
    console.log(error);
  });
});