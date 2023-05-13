const express = require("express");
var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
