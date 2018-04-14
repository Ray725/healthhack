var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var ToneAnalyzer3 = require("watson-developer-cloud/tone-analyzer/v3");

var toneanalyzer = new ToneAnalyzer3({
  url: "https://gateway.watsonplatform.net/tone-analyzer/api",
  username: "{username}",
  password: "{password}",
  version_date: "2017-09-21"
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile('/Users/raymondli/healthhack/index.html');
});

app.post('/postdemo', (req, res) => {
  console.log(req.body);
  var params = {
    'tone_input': { 'text': req.body.feeling },
    'content_type': 'application/json'
  }

  toneanalyzer.tone(params, (err, response) => {
    if(err) {
      throw err;
    }
    res.send(JSON.stringify(response));
  });
  /*
  if(req.body.feeling.includes("bad")) {
    res.send("i'm sorry");
  } else {
    res.send("yay");
  }
  */
});

app.listen(3000, () => {
  console.log("app running on 3000");
});
