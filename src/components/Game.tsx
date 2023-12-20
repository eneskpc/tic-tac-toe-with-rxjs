import { Board } from "./Board";
import style from "../style.module.css";
import { History } from "./History";

export const Game = () => {
  return (
    <div className={style.game}>
      <Board />
      <History />
    </div>
  );
};
