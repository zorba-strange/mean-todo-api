// set up
var mongoose = require('mongoose');
require('../db/schema');

var AuthorModel = mongoose.model('Author');

module.exports = AuthorModel;

