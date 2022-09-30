import { ITasks } from "../../types/task";
import Item from "./Item";
import ListStyle from "./List.module.scss";

function List({ tasks }: { tasks: ITasks[] }) {
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
