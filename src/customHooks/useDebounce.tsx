import { useRef, useEffect } from "react";

export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay = 300
) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current ?? "");
  }, []);

  return (...args: Parameters<T>) => {
    clearTimeout(timerRef.current ?? "");
    timerRef.current = setTimeout(() => callback(...args), delay);
  };
}
