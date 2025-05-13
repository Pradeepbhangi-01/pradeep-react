const heading = React.createElement(
  "h1",
  { id: "parent" }, // to give the heading
  [
    React.createElement("h2", { id: "child1" }, "Hello From child1"),
    React.createElement("h2", { id: "child2" }, "Hello From child2"),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
