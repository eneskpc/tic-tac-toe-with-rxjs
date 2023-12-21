import { currentMoveStream } from "../rxStore";
import { useObservable } from "./useObservable";

export const useCurrentMove = () => {
  const [value, setValue] = useObservable(currentMoveStream);

  return {
    currentMove: value,
    setCurrentMove: setValue,
  };
};
