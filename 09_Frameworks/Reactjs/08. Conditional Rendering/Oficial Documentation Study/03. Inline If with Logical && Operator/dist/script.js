function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    React.createElement("div", null,
    React.createElement("h1", null, "Hello!"),
    unreadMessages.length > 0 &&
    React.createElement("h2", null, "You have ",
    unreadMessages.length, " unread messages.")));




}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
React.createElement(Mailbox, { unreadMessages: messages }),
document.getElementById('root'));