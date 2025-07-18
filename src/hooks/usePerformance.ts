import {
  useEffect,
  useRef,
  useMemo,
  DependencyList,
} from "react";
import { debounce, throttle, rafThrottle, runOnIdle } from "@/lib/performance";

type AnyFunction = (...args: any[]) => any;

/**
 * Custom hook for debouncing a function.
 * @param callback The function to debounce.
 * @param delay The delay in milliseconds.
 * @returns The memoized debounced function.
 */
export function useDebounce<T extends AnyFunction>(
  callback: T,
  delay: number,
): T & { cancel: () => void } {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  const debounced = useMemo(
    () =>
      debounce((...args: Parameters<T>) => {
        callbackRef.current(...args);
      }, delay),
    [delay],
  );

  useEffect(() => () => debounced.cancel(), [debounced]);

  return debounced as T & { cancel: () => void };
}

/**
 * Custom hook for throttling a function.
 * @param callback The function to throttle.
 * @param limit The time limit in milliseconds.
 * @returns The memoized throttled function.
 */
export function useThrottle<T extends AnyFunction>(
  callback: T,
  limit: number,
): T & { cancel: () => void } {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  const throttled = useMemo(
    () =>
      throttle((...args: Parameters<T>) => {
        callbackRef.current(...args);
      }, limit),
    [limit],
  );

  useEffect(() => () => throttled.cancel(), [throttled]);

  return throttled as T & { cancel: () => void };
}

/**
 * Custom hook for running a function on window resize with RAF throttling.
 * @param callback The function to call on resize.
 */
export function useResize(
  callback: (dimensions: { width: number; height: number }) => void,
): void {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const handleResize = rafThrottle(() => {
      callbackRef.current({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => {
      handleResize.cancel();
      window.removeEventListener("resize", handleResize);
    };
  }, []);
}

/**
 * Custom hook for running a function on scroll with RAF throttling.
 * @param callback The function to call on scroll.
 */
export function useScroll(callback: (scrollPosition: number) => void): void {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const handleScroll = rafThrottle(() => {
      callbackRef.current(window.scrollY);
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

/**
 * Custom hook for running a function on idle browser time.
 * @param callback The function to run on idle.
 * @param deps The dependency array to re-trigger the callback.
 */
export function useIdleCallback(
  callback: () => void,
  deps: DependencyList = [],
): void {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    runOnIdle(() => {
      callbackRef.current();
    });
    // No cleanup needed for our simple runOnIdle implementation
  }, deps);
}

/**
 * Custom hook for measuring performance of a component's renders.
 * @param componentName The name of the component being measured.
 */
export function usePerformanceMeasure(componentName: string): void {
  useEffect(() => {
    if (
      process.env.NODE_ENV === "development" &&
      window.performance &&
      window.performance.mark
    ) {
      const startMark = `🚀 ${componentName} Render Start`;
      const endMark = `🚀 ${componentName} Render End`;

      window.performance.mark(startMark);

      const id = setTimeout(() => {
        window.performance.mark(endMark);
        window.performance.measure(
          `🚀 ${componentName} Render`,
          startMark,
          endMark,
        );
      }, 0);

      return () => clearTimeout(id);
    }
  }, [componentName]);
}

