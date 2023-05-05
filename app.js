const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const port = 8080;
const common = require("./encrypt_decrypt");

app.use(express.json());
app.use(express.urlencoded());
//allow origin
app.use(cors());

app.get("/encrypt", (req, res) => {
  let text = req.body.text;
  res.send({
    status: true,
    encrypted_data: common.encrypt(text),
  });
});

app.post("/decrypt", (req, res) => {
  let text = req.body.text;
  res.send({
    status: true,
    encrypted_data: common.decrypt(text),
  });
});

server.listen(port, () => {
  console.log("Server is Running on the Port " + port);
});
