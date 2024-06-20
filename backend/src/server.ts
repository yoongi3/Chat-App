import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import socketController from './socketController';
const PORT = process.env.PORT || 5001;
const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  }
});

socketController(io);

export default server;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
