import './Message.css'

function Message({ someText }) {
  return (
    <div className='message'>
      <h4 className='message-heading'>В функцию 'Message' передан следующий текст:</h4>
      <p>'
        <span className='message-text'>
          {someText}
        </span>
        '</p>
    </div>
  );
}

export default Message;