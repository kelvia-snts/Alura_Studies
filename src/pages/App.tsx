import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { ITask } from "../types/task";
import AppStyle from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
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
      <Stopwatch selected={selected} />
    </div>
  );
}

export default App;
