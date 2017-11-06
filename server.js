var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/videoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/VideoDb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res) { //for undefined urls
  res.status(404).send({url: req.originalUrl + ' not found'})
});


var routes = require('./api/routes/videoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('video list RESTful API server started on: ' + port);
