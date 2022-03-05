import Message from './Message';
import { useState } from 'react';

import intialMessages from '../data/intialMessages';

let id = 6;

function Chat() {
  const [messages, setMessages] = useState(intialMessages);

  const addMessage = (text) => {
    setMessages([...messages, { id: id++, text, user: 'Nicolas' }]);
  };

  return (
    <div className='chat'>
      <ul>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMessage(e.target.message.value);
          e.target.reset();
        }}
      >
        <input className='message-input' name='message' placeholder='Type a message' required />
      </form>
    </div>
  );
}

export default Chat;
