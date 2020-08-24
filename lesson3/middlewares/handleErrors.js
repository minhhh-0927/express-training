import httpStatusCodes from 'http-status-codes'

const handleErrors = async (error, req, res, next) => {
    if (!error) {
        next()
    }
    const resStatusCode = (error.statusCode) ? error.statusCode : httpStatusCodes.OK
    const resData = {
        status: 'error',
        stack: error.stack
    }
    res.status(resStatusCode).send(resData)
}

export default handleErrors
