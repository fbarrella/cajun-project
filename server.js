const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));
app.listen(port, () => {
  console.log("Server initialized into port " + port + " 🌎");
  console.log("http://localhost:8080/");
});

app.get('/', (req, res)=>{
  return res.sendFile(path.resolve('index.html'));
});