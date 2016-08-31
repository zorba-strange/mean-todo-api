// set up 
var AuthorModel = require('../models/author');
var TodoModel = require('../models/todo');


// start author controller
var authorsController = {
  index: function(req, res){
    AuthorModel.find({}, function(err, docs){
      res.json(docs);
    });
  },
  new: function(req, res){
    var author = new AuthorModel({name: req.body.name});
    author.save(function(err){
      if(!err){
        console.log(err);
      }
      res.json(author);
    });
  },
  show: function(req, res){
    AuthorModel.findOne({_id: req.params.id}, function(err, docs){
      res.json(docs);
    });
  },
  update: function(req, res){
    AuthorModel.findById(req.params.id, function(err, docs){
      docs.name = req.body.name;
      docs.save(function(err){
        if(err){
          console.log(err);
        }
        res.json(docs);
      })
    })
  },
  delete: function(req, res){
    AuthorModel.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      }
      res.json();
    })
  }
}

module.exports = authorsController;
