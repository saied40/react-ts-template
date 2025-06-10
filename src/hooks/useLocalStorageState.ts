import { getItem, setItem } from "@utils/localStorage";
import { useEffect, useState } from "react";

  /**
   * This hook is like the useState hook, but it also stores the state in
   * localStorage. It uses the key provided as the first argument to store
   * and retrieve the state. If the key does not exist in localStorage, it
   * will use the initialValue provided as the second argument.
   *
   * @param key the key to use in localStorage
   * @param initialValue the initial value to use if the key does not exist
   * in localStorage
   * 
   * @example
   * const [count, setCount] = useLocalStorageState("count", 0);
   */
export default function useLocalStorageState<T>(key: string, initialValue: T): readonly [T, React.Dispatch<T>] {
  const [state, setState] = useState(() => {
    const item = getItem(key);
    return item || initialValue;
  });

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        setState(JSON.parse(e.newValue as string) as T);
      };
    };
    window.addEventListener("storage", listener);
    return () => window.removeEventListener("storage", listener);
  }, [key]);

  useEffect(() => {
    setItem(key, state);
  }, [key, state]);

  return [state, setState] as const;
};
