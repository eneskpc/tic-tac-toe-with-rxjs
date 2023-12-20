import { useMemo } from "react";
import style from "../style.module.css";
import { useHistory } from "../hooks/useHistory";
import { useCurrentMove } from "../hooks/useCurrentMove";

export const History = () => {
  const { history } = useHistory();
  const { setCurrentMove } = useCurrentMove();

  const moves = useMemo(() => {
    return history.map((_, move: number) => {
      let description;
      if (move > 0) {
        description = "Go to move #" + move;
      } else {
        description = "Go to game start";
      }
      return (
        <li key={move}>
          <button onClick={() => setCurrentMove(move)}>{description}</button>
        </li>
      );
    });
  }, [history]);

  return (
    <div className={style.gameInfo}>
      <ol>{moves}</ol>
    </div>
  );
};
