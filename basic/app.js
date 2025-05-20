import React from "react";
import ReactDOM from "react-dom/client";

// const heading = (
//   <h1 id="praz" className="pp">
//     Hello from Pradeep
//   </h1>
// );

// React Component
// 1. Class Based Components and 2. Functional Based Components
// React Components

const Title = () => {
  return <h1>Hello Pradeep</h1>;
};

const SubHeading = () => {
  return <h3>Hi there</h3>;
};
const Heading = () => (
  <div className="parent">
    {Title()}
    <h2 className="pp">Hello From PP</h2>
    <SubHeading />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
