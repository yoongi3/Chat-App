import { Server, Socket } from 'socket.io';

export const handleNewMessage = (io: Server, socket: Socket, data: any) => {
    io.emit('receive message', data)
};