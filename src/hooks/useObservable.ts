import { useCallback, useRef, useSyncExternalStore } from "react";
import { BehaviorSubject } from "rxjs";

export const useObservable = <T>(observable: BehaviorSubject<T>) => {
  const observableRef = useRef<BehaviorSubject<T>>(observable);

  if (observableRef.current !== observable) {
    observableRef.current = observable;
  }

  const subscribe = useCallback((handleStoreChange: VoidFunction) => {
    const subscription = observableRef.current.subscribe(handleStoreChange);
    return () => subscription.unsubscribe();
  }, []);

  const getSnapshot = useCallback(() => {
    return observableRef.current.getValue();
  }, []);

  const setValue = useCallback(
    (value: T) => observableRef.current.next(value),
    []
  );

  return [useSyncExternalStore(subscribe, getSnapshot), setValue] as const;
};
