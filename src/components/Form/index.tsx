import React, { useState } from "react";
import { ITask } from "../../types/task";
import FormStyle from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../Button";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export function Form({ setTasks }: Props) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      { task, time, selected: false, completed: false, id: uuidv4() },
    ]);
    setTask("");
    setTime("00:00");
  }

  return (
    <form className={FormStyle.novaTarefa} onSubmit={addTask}>
      <div className={FormStyle.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="O que você quer estudar?"
          required
        />
      </div>

      <div className={FormStyle.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
