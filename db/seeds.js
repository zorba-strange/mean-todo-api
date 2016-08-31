// set up
var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/todo');
var AuthorModel = require('../models/author');
var TodoModel = require('../models/todo');

// remove all previous data
AuthorModel.remove({}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log('Removed Authors');
  };
});
TodoModel.remove({}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log('Removed Todos');
  };
});

// todo seeds
var todo1 = new TodoModel({
  title: "Hack Playbook Study",
  info: "Read through chapter one. Set up lab with tools. Read up on tools.",
  importance: 1
});

var todo2 = new TodoModel({
  title: "GA profile page",
  info: "Go through notes on your profile page and make the changes. Email that person back and ask her opinion on how to word your work with Jay",
  importance: 1
});

var todo3 = new TodoModel({
  title: "Resume",
  info: "Work on resume and get a good first draft ready to go. Post it on /r/resumes and get feed back.",
  importance: 1
});

var todo4 = new TodoModel({
  title: "Las Vagas Restaurants",
  info: "Research Las Vegas restaurants that we would like to go to during our trip.",
  importance: 1
});

// author seeds
var winston = new AuthorModel({
  name: "Winston",
  todos: [todo1, todo2, todo3]
});

var carson = new AuthorModel({
  name: "Carson",
  todos: [todo4]
});

// save authors
winston.save(function(err){
  if(err){
    console.log(err)
  };
});
carson.save(function(err){
  if(err){
    console.log(err)
  };
});

















