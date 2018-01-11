const spreadsheet       = require("./controllers/spreadsheet");
const Authentication    = require("./controllers/authentication");
const passportService   = require("./services/passport");
const passport          = require("passport");
const express           = require("express")

const requireAuth       = passport.authenticate('jwt', { session: false }); //Route middleware for authentication
const requireSignin     = passport.authenticate('local', { session: false });

module.exports = function(app) {
    var router = express.Router();

    var spreadsheet = require('./controllers/spreadsheet');

    router.post('/signin', requireSignin, Authentication.signin);
    router.post('/signup', Authentication.signup);
    
    router.get('/spreadsheet',                  requireAuth, spreadsheet.getSpreadSheet);
    router.post('/spreadsheet',                 requireAuth, spreadsheet.createSpreadSheet);
    router.get('/spreadsheet/:spreadsheetId',   requireAuth, spreadsheet.getSpreadSheetDetail);
    router.put('/spreadsheet/:spreadsheetId',   requireAuth, spreadsheet.updateSpreadSheet);
    router.delete('/spreadsheet/:spreadsheetId',requireAuth, spreadsheet.deleteSpreadSheet);

    app.use('/api/v1', router)
}