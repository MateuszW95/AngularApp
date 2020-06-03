//Install express server
const express = require('express');
const path = require('path');
const cors = require("cors");

const app = express();

// add this code
const whitelist = ['http://localhost:3000']; // list of allow domain

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) {
      return callback(null, true);
    }

    if (whitelist.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}

// end
app.use(cors(corsOptions));

app.use(cors());
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/AngularApp'));


app.get('/*', function(req,res) {
  const origin = req.get('origin');
  res.header('Access-Control-Allow-Origin', origin);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendFile(path.join(__dirname+'/dist/AngularApp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
