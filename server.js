const express = require("express");
const app     = express();
let PORT      = 3333;

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("/public/index.html", { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Server listening on localhost:${PORT}`);
});