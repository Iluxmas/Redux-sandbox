import React from "react";
import { connect } from "react-redux";

const Counter = ({ counter, inc, dec, rnd }) => {
  const Rand = () => {
    const payload = Math.floor(Math.random() * 10);
    rnd(payload);
  };
  return (
    <div>
      <h2 id="counter">{counter}</h2>
      <button onClick={inc}>plus</button>
      <button onClick={dec}>minus</button>
      <button onClick={() => Rand()}> RND</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { counter: state };
};

export default connect(mapStateToProps)(Counter);
