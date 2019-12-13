function ListItem(props) {
  return React.createElement("li", null, props.value);
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    React.createElement("ul", null,
    numbers.map((number) =>
    React.createElement(ListItem, { key: number.toString(),
      value: number }))));



}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
React.createElement(NumberList, { numbers: numbers }),
document.getElementById('root'));