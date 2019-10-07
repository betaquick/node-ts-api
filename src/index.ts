import * as http from 'http';
import config from './config/config';
import { Socket } from './socket';

// tslint:disable-next-line: no-require-imports
const app = require('./config/express').default();

const server: http.Server = new http.Server(app);

const socket = new Socket(server);

server.listen(config.port);

server.on('error', (e: Error) => {
  console.log('Error starting server' + e);
});

server.on('listening', () => {
  console.log(`Server started on port ${ config.port } on env ${ process.env.NODE_ENV || 'dev' }`);
});
