const MessageList = ({ message }) => {
  const token = sessionStorage.getItem("token");
  return (
    <div id="message-container" key={message._id}>
      <h2 className="post-h2">{message.fromUser}</h2>
      <p className="post-content">{message.content}</p>
      <p className="message-post">{message.post}</p>
      <p className="message-createdAt">{message.createdAt}</p>
      <p className="message-updatedAt">{message.updatedAt}</p>
    </div>
  );
};

export default MessageList;
