import app from '../app';
import http from 'http';
import config from 'config';

const serverConfig = config.get('server')

const normalizePort = (val) => {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

const onListening = () => {
  console.log(`Listening on http://${serverConfig.host}:${serverConfig.port}`);
}

let port = normalizePort(process.env.PORT || serverConfig.port || '3000');
app.set('port', port);
app.set('host', serverConfig.host);

let server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
