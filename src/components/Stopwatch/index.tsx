import { useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./StopwatchStyle.module.scss";

interface Props {
  selected: ITask | undefined;
}

export default function Stopwatch({ selected }: Props) {
  const [time, setTime] = useState<number>();
  if (selected?.time) {
    setTime(timeToSeconds(selected.time));
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo: {time}
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div>
  );
}
