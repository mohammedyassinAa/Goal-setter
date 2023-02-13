// middleware is a functions that executes during the request response cycle (when u make a request)
// The function starts by checking the current status code of the response object. 
// If it is not set, it defaults to a status code of 500 (Internal Server Error).
//  The response status is then set to the determined status code using the res.status method.
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    });
};
// in stack some informations for the devellopers to help them if the Node_envirnement is produc    tion it will be null
module.exports = {
    errorHandler,
};
// adebiari@nttdata.com