const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
React.createElement("li", null, numbers));


ReactDOM.render(
React.createElement("ul", null, listItems),
document.getElementById('root'));