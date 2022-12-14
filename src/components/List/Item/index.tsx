import { ITask } from "../../../types/task";
import ItemStyle from "./Item.module.scss";

interface Props extends ITask {
  selecetTask: (selectedTask: ITask) => void;
}

export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  selecetTask,
}: Props) {
  return (
    <li
      className={`${ItemStyle.item} ${selected ? ItemStyle.selectedItem : ""} ${
        completed ? ItemStyle.completedItem : ""
      }`}
      onClick={() =>
        !completed && selecetTask({ task, completed, id, selected, time })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span
          className={ItemStyle.completed}
          aria-label="Tarefa completada"
        ></span>
      )}
    </li>
  );
}
