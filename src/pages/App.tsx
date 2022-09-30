import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { ITasks } from "../types/task";
import AppStyle from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([]);
  const [selected, setSelected] = useState<ITasks>();

  function selectTask(selectedTask: ITasks) {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  return (
    <div className={AppStyle.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selecetTask={selectTask} />
      <Stopwatch />
    </div>
  );
}

export default App;
