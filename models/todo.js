// set up
var mongoose = require('mongoose');
require('../db/schema');

var TodoModel = mongoose.model('Todo');

module.exports = TodoModel;
