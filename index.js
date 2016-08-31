// set up
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var authorsController = require('./controllers/authorsController');
var cors = require('cors');
var app = express();

// connect to database
if(process.env.NODE_ENV == "production"){
    mongoose.connect("mongodb://heroku_xz4nnfst:gljchnud613nc4036tgg6ht7mp@ds019976.mlab.com:19976/heroku_xz4nnfst")
}else{
      mongoose.connect("mongodb://localhost/todo");
}

// set and use
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(cors());

app.listen(process.env.PORT || 8080, function(err){
  if(err){
    console.log(err);
  }else{
    console.log('Api running on port 8080');
  }
});

// routes
app.get('/authors', authorsController.index);
app.post('/authors', authorsController.new);
app.get('/authors/:id', authorsController.show);
app.put('/authors/:id', authorsController.update);
app.delete('/authors/:id', authorsController.delete);

