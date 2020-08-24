import httpStatusCodes from 'http-status-codes'

class HttpError extends Error {
    constructor (message) {
        super(message)
        console.error(message)
    }
}

class UnauthorizedError extends HttpError {
    constructor (messsage) {
        super(messsage)
        this.statusCode = httpStatusCodes.UNAUTHORIZED
    }
}

class BadRequestError extends HttpError {
    constructor (messsage) {
        super(messsage)
        this.statusCode = httpStatusCodes.BAD_REQUEST
    }
}

class NotFoundError extends HttpError {
    constructor (messsage) {
        super(messsage)
        this.statusCode = httpStatusCodes.NOT_FOUND
    }
}

class UnprocessableEntityError extends HttpError {
    constructor (messsage) {
        super(messsage)
        this.statusCode = httpStatusCodes.UNPROCESSABLE_ENTITY
    }
}

class InternalServerError extends HttpError {
    constructor (messsage) {
        super(messsage)
        this.statusCode = httpStatusCodes.INTERNAL_SERVER_ERROR
    }
}

export default {
    BadRequestError,
    UnauthorizedError,
    NotFoundError,
    UnprocessableEntityError,
    InternalServerError
}
