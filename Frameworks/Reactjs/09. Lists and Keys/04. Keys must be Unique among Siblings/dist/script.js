function Blog(props) {
  const sidebar =
  React.createElement("ul", null,
  props.posts.map((post) =>
  React.createElement("li", { key: post.id },
  post.title)));




  const content = props.posts.map((post) =>
  React.createElement("div", { key: post.id },
  React.createElement("h3", null, post.title),
  React.createElement("p", null, post.content)));


  return (
    React.createElement("div", null,
    sidebar,
    React.createElement("hr", null),
    content));


}

const posts = [
{ id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
{ id: 2, title: 'Installation', content: 'You can install React from npm.' }];

ReactDOM.render(
React.createElement(Blog, { posts: posts }),
document.getElementById('root'));