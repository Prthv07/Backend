const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const port = 8080;

//allow origin
app.use(cors());





server.listen(port, () => {
  console.log("Server is Running on the Port " + port);
});
