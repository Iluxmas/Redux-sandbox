import React, { useState } from "react";
import ReactDOM from "react-dom/client";
//import App from "./Components/app/app";

const App = () => {
  const [red, changeRed] = useState(40);
  const [blue, changeBlue] = useState(40);
  const [green, changeGreen] = useState(40);

  const styles = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  };

  return (
    <div style={styles}>
      <hr />
      <p>Red: {red} </p>
      <button onClick={() => changeRed((red) => red + 3)}>+</button>
      <button onClick={() => changeRed((red) => red - 3)}>-</button>
      <hr />
      <p>Green: {green} </p>
      <button onClick={() => changeGreen((gr) => gr + 3)}>+</button>
      <button onClick={() => changeGreen((gr) => gr - 3)}>-</button>
      <hr />
      <p>Blue: {blue} </p>
      <button onClick={() => changeBlue((bl) => bl + 3)}>+</button>
      <button onClick={() => changeBlue((bl) => bl - 3)}>-</button>
      <hr />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
