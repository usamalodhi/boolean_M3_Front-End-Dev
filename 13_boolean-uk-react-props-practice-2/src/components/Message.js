function Message({ message }) {
  return <li className={`message ${message.user === 'Nicolas' ? 'mine' : 'other'}`}>{message.text}</li>;
}

export default Message;
