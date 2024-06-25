import { useContext, useEffect, useState } from "react";
import { ChatroomStyled } from "./ChatroomStyled"
import { WebSocketContext } from "../Providers/WebSocketProvider";

const Chatroom = () => {
    const { socket } = useContext(WebSocketContext);
    const [inputMessage, setInputMessage] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputMessage(e.target.value);
    }

    const handleButton = () => {
        if (!socket) return;
        socket.emit('message', inputMessage)
        setInputMessage('');
    }

    useEffect(()=>{
        if(socket){
            socket.on('message', (message: string) =>{
                setMessages(prevMessages => [...prevMessages, message]);
            });
        }
        return () => {
            if (socket) {
              socket.off('message');
            }
          };
    }, [socket])
    return(
        <ChatroomStyled>
            <div>Chat Room</div>
            <div className="message-container">
                {messages.map((message, index) => (
                    <div key={index} className="message">{message}</div>
                ))}
            </div>
            <input type="text" value={inputMessage} onChange={handleMessageChange}></input>
            <button onClick={handleButton}>click me</button>     
        </ChatroomStyled>
    )
}

export default Chatroom