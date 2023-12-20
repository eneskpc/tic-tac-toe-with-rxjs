import { Players, calculateWinner } from "../helpers";
import { Square } from "./Square";
import style from "../style.module.css";
import { useHistory } from "../hooks/useHistory";
import { useCurrentMove } from "../hooks/useCurrentMove";

export const Board = () => {
  const { history, setHistory } = useHistory();
  const { currentMove, setCurrentMove } = useCurrentMove();
  const xIsNext = currentMove % 2 === 0;
  const squares = history[currentMove];

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = Players.X;
    } else {
      nextSquares[i] = Players.O;
    }

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? Players.X : Players.O);
  }

  return (
    <div className="game-board">
      <div className={style.status}>{status}</div>
      <div className={style.boardRow}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className={style.boardRow}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className={style.boardRow}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};
