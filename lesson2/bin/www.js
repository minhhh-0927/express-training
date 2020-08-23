import app from '../app.js'
import http from 'http'
import config from 'config'

const serverConfig = config.get('server')

const normalizePort = (val) => {
    const port = parseInt(val, 10)

    if (isNaN(port)) {
        return val
    }

    if (port >= 0) {
        return port
    }

    return false
}

const onError = (error) => {
    if (error.syscall !== 'listen') {
        throw error
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port

    switch (error.code) {
    case 'EACCES':
        throw new Error(bind + ' requires elevated privileges')
    case 'EADDRINUSE':
        throw new Error(bind + ' is already in use')
    default:
        throw error
    }
}

const onListening = () => {
    console.log(`Listening on http://${serverConfig.host}:${serverConfig.port}`)
}

const port = normalizePort(process.env.PORT || serverConfig.port || '3000')
app.set('port', port)
app.set('host', serverConfig.host)

const server = http.createServer(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
