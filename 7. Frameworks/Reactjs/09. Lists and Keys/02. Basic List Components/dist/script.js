function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
  React.createElement("li", { key: number.toString() },
  number));


  return (
    React.createElement("ul", null, listItems));

}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
React.createElement(NumberList, { numbers: numbers }),
document.getElementById('root'));