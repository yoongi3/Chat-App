import React from 'react';
import './App.css';
import { WebSocketProvider } from './Components/Providers/WebSocketProvider';
import Chatroom from './Components/Pages/Chatroom';

function App() {
  return (
    <WebSocketProvider url={process.env.REACT_APP_SOCKET_SERVER_URL ?? ''}>
      <Chatroom/>
    </WebSocketProvider>
  );
}

export default App;
