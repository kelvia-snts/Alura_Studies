import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { Button } from "../Button";
import { Clock } from "./Clock";
import stopwatchStyle from "./StopwatchStyle.module.scss";

interface Props {
  selected: ITask | undefined;
  finishTask: () => void;
}

export function Stopwatch({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  // recebe uma função e um arrays de dependências-variável
  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={stopwatchStyle.stopwatch}>
      <p className={stopwatchStyle.title}>
        Escolha um card e inicie o cronômetro
      </p>
      <div className={stopwatchStyle.wrapperWatch}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Começar</Button>
    </div>
  );
}
