import { ITask } from "../../types/task";
import Item from "./Item";
import ListStyle from "./List.module.scss";

interface Props {
  tasks: ITask[];
  selecetTask: (selectedTask: ITask) => void;
}

export function List({ tasks, selecetTask }: Props) {
  return (
    <aside className={ListStyle.toDoList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item selecetTask={selecetTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}
