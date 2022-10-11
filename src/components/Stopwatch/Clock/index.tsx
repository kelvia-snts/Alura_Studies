import clockStyle from "./ClockStyle.module.scss";

interface Props {
  time: number | undefined;
}

export function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteTen, minuteUnit] = String(minutes).padStart(2, "0");
  const [secondTen, secondUnit] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={clockStyle.clockNumber}>{minuteTen}</span>
      <span className={clockStyle.clockNumber}>{minuteUnit}</span>
      <span className={clockStyle.divisionClock}>:</span>
      <span className={clockStyle.clockNumber}>{secondTen}</span>
      <span className={clockStyle.clockNumber}>{secondUnit}</span>
    </>
  );
}
