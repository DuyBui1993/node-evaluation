
var _helper         = require('./_helpers');
var SpreadSheet     = require('../models/spreadsheet');

exports.getSpreadSheet = function (req, res) {  
    try {
        SpreadSheet.find({}).exec((err, result) => {
            if (err) {return _helper.returnError(res, 'Something went wrong: ' + err) }
            return _helper.returnSuccess(res, 'Get spreadsheet successfully', result);
        })
    } catch(ex) {
        return _helper.returnError(res, ex, 500);
    }
};

exports.getSpreadSheetDetail = function (req, res) {  
    try {
        SpreadSheet.findOne({ _id: id }).exec((err, result) => {
            if (err) {return _helper.returnError(res, 'Something went wrong: ' + err) }
            return _helper.returnSuccess(res, 'Get spreadsheet detail successfully', result);
        });
    } catch(ex) {
        return _helper.returnError(res, ex, 500);
    }
};

exports.createSpreadSheet = function (req, res) {  
    try {
        new SpreadSheet(req.body).save((err, result) => {
            if (err) { return _helper.returnError(res, 'Something went wrong: ' + err) }
            return _helper.returnSuccess(res, 'Create spreadsheet successfully', result);
        });
    } catch(ex) {
        return _helper.returnError(res, ex, 500);
    }
};

exports.updateSpreadSheet = function (req, res) {  
    try {
        SpreadSheet.findOneAndUpdate({ _id: req.params.spreadsheetId }, req.body, { new: true }, function(err, result) {
            if (err) { return _helper.returnError(res, 'Something went wrong: ' + err)  }
            return _helper.returnSuccess(res, 'Update spreadsheet successfully', result);
        });
    } catch(ex) {
        return _helper.returnError(res, ex, 500);
    }
};

exports.deleteSpreadSheet = function (req, res) {  
    try {
        SpreadSheet.remove({ _id: req.params.spreadsheetId })
            .exec((err, result) => {
                if (err) { return _helper.returnError(res, 'Something went wrong: ' + err) }
                return _helper.returnSuccess(res, 'Delete spreadsheet successfully', result);
            });
    } catch(ex) {
        return _helper.returnError(res, ex, 500);
    }
};
