function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return React.createElement("li", null, props.value);
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
  // Correct! Key should be specified inside the array.
  React.createElement(ListItem, { key: number.toString(),
    value: number }));

  return (
    React.createElement("ul", null,
    listItems));


}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
React.createElement(NumberList, { numbers: numbers }),
document.getElementById('root'));