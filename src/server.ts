import { config } from './configuration';
import { appFactory } from './http/app';
import { logger } from './libs/logger';
import { createUserRepository } from './data/users/userRepository';
import { UsersService } from './domain/users/usersService';
import { init } from './signals';
import { Database } from './data/database';


// import { Server } from 'ws';
//
// const wss = new Server({ port: 8080 });
// console.log(123)
// wss.on('connection', function connection(ws, req) {
//   ws.on('pong', heartbeat);
//   const ip = req.socket.remoteAddress;
//   console.log(ip)
// });
//
// const interval = setInterval(function ping() {
//   wss.clients.forEach(function each(ws) {
//     if (!ws.CONNECTING) return ws.terminate();
//
//     ws.ping(noop);
//   });
// }, 30000);
//
// wss.on('close', function close() {
//   clearInterval(interval);
// });
//
// function noop() {
//   return
// }
//
// function heartbeat() {
//   this.isAlive = true;
// }

const database = new Database(config.connectionString as string);
database.connect();
const userRepository = createUserRepository();
const userService = new UsersService(userRepository);

const app = appFactory(userService);

const server = app.listen(config.port, () => {
  logger.info(`Listening on *:${config.port}`);
});

const shutdown = init(() => {
  server.close(async () => {
    await database.disconnect();
  });
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
