var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  name: String,
  done:{default: false, type: Boolean}
},
  {
    versionKey: false,
});

module.exports = mongoose.model('Todo', TodoSchema);