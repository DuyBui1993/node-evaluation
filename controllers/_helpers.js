
// return error for api
exports.returnError = function(res, error, code) {
    var errorMessage = error;
    if (errorMessage.constructor === Array) {
        errorMessage = error.join(" ");
    }
    res.status(code || 500).json({
        success: false,
        message: error,
        error: error
    })
}

// return success for api
exports.returnSuccess = function(res, message, data) {
    res.json({
        success: true,
        message: message,
        data: data,
    });
}