function tick() {
  const element =
  React.createElement("div", null,
  React.createElement("h1", null, "Hello, world!"),
  React.createElement("h2", null, "It is ", new Date().toLocaleTimeString(), "."));


  // highlight-next-line
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);