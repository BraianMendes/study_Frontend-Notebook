function UserGreeting(props) {
  return React.createElement("h1", null, "Welcome back!");
}

function GuestGreeting(props) {
  return React.createElement("h1", null, "Please sign up.");
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return React.createElement(UserGreeting, null);
  }
  return React.createElement(GuestGreeting, null);
}

ReactDOM.render(
// Try changing to isLoggedIn={true}:
React.createElement(Greeting, { isLoggedIn: false }),
document.getElementById('root'));