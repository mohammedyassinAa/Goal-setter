// middleware is a functions that executes during the request response cycle (when u make a request)
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
