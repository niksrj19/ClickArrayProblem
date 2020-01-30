import React from "react";
import "./styles.css";

function solution() {
  var fileArray = JSON.parse("./click.json");

  console.log(fileArray);
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {solution}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
