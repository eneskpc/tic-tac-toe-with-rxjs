import { historyStream } from "../rxStore";
import { useObservable } from "./useObservable";

export const useHistory = () => {
  const [value, setValue] = useObservable(historyStream);

  return {
    history: value,
    setHistory: setValue,
  };
};
