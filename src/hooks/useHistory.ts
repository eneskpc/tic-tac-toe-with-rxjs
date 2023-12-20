import { useEffect, useState } from "react";
import { historyStream } from "../rxStore";

export const useHistory = () => {
  const [history, setHistory] = useState<string[][]>(historyStream.getValue());

  useEffect(() => {
    const historySub = historyStream.subscribe((history$) => {
      setHistory(history$);
    });

    return () => {
      historySub.unsubscribe();
    };
  }, []);

  return {
    history,
    setHistory: (newHistory: string[][]) => {
      historyStream.next(newHistory);
    },
  };
};
