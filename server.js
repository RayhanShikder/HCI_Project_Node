var cors = require('cors');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  Task = require('./api/models/videoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/VideoDb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); 



var routes = require('./api/routes/videoListRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) { //for undefined urls
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('video list RESTful API server started on: ' + port);

