var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('index.html');
});

app.post('/postdemo', (req, res) => {
  console.log(req);
});

app.listen(3000, () => {
  console.log("app running on 3000");
});
