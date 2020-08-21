class Hello extends React.Component {
  render() {
    return React.createElement("h1", null, "Hello, ", this.props.name, "!");
  }}


class HelloWithState extends React.Component {

  constructor(props) {
    //Since we are extending the default constructor,
    //handle default activities first.
    super(props);

    //Extract the firstname from the prop
    let firstName = this.props.name.split(" ")[0];
    //Please don't judge me by the way I extract the first name.
    //This is an example.

    //In the constructor, feel free to modify the
    //state property on the current context.
    this.state = {
      name: firstName };


  } //Look maa, no comma required in JSX based class defs!

  render() {
    return React.createElement("h1", null, "Hello, ", this.state.name, "!");
  }}


ReactDOM.render(React.createElement(Hello, { name: "Billy James" }),
document.getElementById('main'));

ReactDOM.render(React.createElement(HelloWithState, { name: "Billy James" }),
document.getElementById('mainWithState'));