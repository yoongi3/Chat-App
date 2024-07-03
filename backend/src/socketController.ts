import { Server, Socket } from 'socket.io';
import { handleNewChatRoom } from './handlers/newChatRoomHandler';
import { handleNewUser } from './handlers/newUserHandler';
import { handleNewMessage } from './handlers/newMessageHandler';

const socketController = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log(socket.id, 'Client connected');

    socket.on('new chat room', (data) => {
      handleNewChatRoom(io, socket, data);
    });

    socket.on('new user', (data) => {
      handleNewUser(io, socket, data);
    });

    socket.on('send message', (data) => {
      console.log(socket.id, data)
      handleNewMessage(io, socket, data);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

export default socketController;