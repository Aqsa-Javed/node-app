const mongoose = require('mongoose');
var schema = new mongoose.Schema({ task: "string", id: "string" });

var Tasks = mongoose.model('Tasks',schema);


module.exports = { Tasks };