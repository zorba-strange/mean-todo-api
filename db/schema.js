// set up
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// schemas 
// todo schema
var TodoSchema = Schema({
  title: String,
  info: String,
  importance: Number
});

// author schema
var AuthorSchema = Schema({
  name: String,
  todos: [TodoSchema]
});

// setting models in mongoose
mongoose.model('Todo', TodoSchema);
mongoose.model('Author', AuthorSchema);


