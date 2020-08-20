function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    React.createElement("div", { className: "warning" }, "Warning!"));



}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning }));

  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement(WarningBanner, { warn: this.state.showWarning }),
      React.createElement("button", { onClick: this.handleToggleClick },
      this.state.showWarning ? 'Hide' : 'Show')));



  }}


ReactDOM.render(
React.createElement(Page, null),
document.getElementById('root'));