import style from "../style.module.css";

type SquareProps = {
  value: string;
  onSquareClick: () => void;
};

export function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className={style.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}
