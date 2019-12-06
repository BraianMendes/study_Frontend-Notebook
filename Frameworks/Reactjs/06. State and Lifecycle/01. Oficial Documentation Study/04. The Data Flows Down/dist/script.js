function FormattedDate(props) {
  return React.createElement("h2", null, "It is ", props.date.toLocaleTimeString(), ".");
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
    () => this.tick(),
    1000);

  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date() });

  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "Hello, world!"),
      React.createElement(FormattedDate, { date: this.state.date })));


  }}


function App() {
  return (
    React.createElement("div", null,
    React.createElement(Clock, null),
    React.createElement(Clock, null),
    React.createElement(Clock, null)));


}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));