import express from 'express';
import http from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

io.on('connection', (socket: Socket) => {
  console.log('Client connected');

  socket.on('message', (message: string) => {
    console.log(`Received: ${message}`);
    io.emit('message', message); 
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});