import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createStore, bindActionCreators } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import * as actions from "./actions";
import App from "./App.js";

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));

//const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
//counter={store.getState()} inc={inc} dec={dec} rnd={Rand}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
//document.getElementById("counter").innerHTML = store.getState();
