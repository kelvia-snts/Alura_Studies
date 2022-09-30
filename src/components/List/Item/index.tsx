import { ITasks } from "../../../types/task";
import ItemStyle from "../List.module.scss";

export default function Item({ task, time, selected, completed, id }: ITasks) {
  console.log("item atual: ", { task, time, selected, completed, id });

  return (
    <li className={ItemStyle.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
