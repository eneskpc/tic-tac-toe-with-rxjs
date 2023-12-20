import { useEffect, useState } from "react";
import { currentMoveStream } from "../rxStore";

export const useCurrentMove = () => {
  const [currentMove, setCurrentMove] = useState<number>(
    currentMoveStream.getValue()
  );

  useEffect(() => {
    const currentMoveHub = currentMoveStream.subscribe((currentMove$) => {
      setCurrentMove(currentMove$);
    });

    return () => {
      currentMoveHub.unsubscribe();
    };
  }, []);

  return {
    currentMove,
    setCurrentMove: (newCurrentMove: number) => {
      currentMoveStream.next(newCurrentMove);
    },
  };
};
