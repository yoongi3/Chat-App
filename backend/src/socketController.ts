import { Server, Socket } from 'socket.io';

const socketController = (io: Server) => {
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
};

export default socketController;