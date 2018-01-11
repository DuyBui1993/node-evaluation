const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
var Mixed       = mongoose.Schema.Types.Mixed;

//Define our model
const spreadSheetSchema = new Schema({
    headerData: {type: Mixed},
    jsonData: {type: Mixed}
});

//create the model class
const ModelClass = mongoose.model('spreadsheet', spreadSheetSchema);

//export the model
module.exports = ModelClass;