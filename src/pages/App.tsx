import React from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import AppStyle from "./App.module.scss";

function App() {
  return (
    <div className={AppStyle.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
