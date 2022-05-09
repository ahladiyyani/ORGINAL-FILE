var express = require('express');
var bodyParser = require('body-parser'); 
var path = require('path');
var port = process.env.port || 4500;  
var app = express();

const indexRouter = require('./routes/index');

// var db = require('./config/db.js');
//   global.db = db;
//   db.connect(db.MODE_PRODUCTION, function (err) {
//     if (err) {
//       console.log('Unable to connect to MySQL.')
//       process.exit(1);
//     }
//   });

  app.set('views',[path.resolve(__dirname + '/public/views')]);
  app.set('view engine', 'ejs');  
  app.use(bodyParser.urlencoded({ extended: true }));  
  app.use(bodyParser.json());
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
  app.use(express.static(path.resolve(__dirname + '/public')));   

  app.use('/',indexRouter);



  app.listen(port,function(){
    console.log("App listening on port " + port);
  });