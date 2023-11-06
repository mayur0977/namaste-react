const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", null, "Hello world p1 from child 1"),
    React.createElement("h2", null, "Hello world p1 from child 2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", null, "Hello world  p2 from child 1"),
    React.createElement("h2", null, "Hello world p2 from child 2"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from javascript"
// );
//React.createElement(tag name, attributes like id class etc,content);
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

setTimeout(() => {
  root.render(parent);
}, 2000);
