import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "parent" }, // to give the heading
  "Hello From child1"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
