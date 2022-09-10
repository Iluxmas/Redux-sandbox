import React, { useState, useContext, useEffect } from "react";
import Counter from "./Counter";

const stylez = {
  marginLeft: "10px",
};

const App = () => {
  return (
    <div style={stylez}>
      <Counter />
    </div>
  );
};

export default App;
