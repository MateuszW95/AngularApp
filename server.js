//Install express server
const express = require('express');
const path = require('path');
const cors = require("cors");

const app = express();

app.use(cors());
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/AngularApp'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
  next();
});

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/AngularApp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
