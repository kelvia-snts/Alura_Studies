import React from "react";
import Item from "./Item";
import ListStyle from "./List.module.scss";

const tasks = [
  {
    task: "React",
    time: "02:00:00",
  },
  {
    task: "Javascript",
    time: "01:00:00",
  },
  {
    task: "Typescript",
    time: "03:00:00",
  },
];

function List() {
  return (
    <aside className={ListStyle.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
