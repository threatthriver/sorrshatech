/**
 * A collection of performance-related utility functions.
 * These are designed to be tree-shakeable.
 */

// A generic function type
type AnyFunction = (...args: never[]) => unknown;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method.
 *
 * @param func The function to debounce.
 * @param wait The number of milliseconds to delay.
 * @returns Returns the new debounced function.
 */
export function debounce<T extends AnyFunction>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) & { cancel: () => void } {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  const debounced = (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };

  debounced.cancel = () => {
    clearTimeout(timeout);
  };

  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds.
 *
 * @param func The function to throttle.
 * @param wait The number of milliseconds to throttle invocations to.
 * @returns Returns the new throttled function.
 */
export function throttle<T extends AnyFunction>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) & { cancel: () => void } {
  let inThrottle = false;
  let timeout: ReturnType<typeof setTimeout> | undefined;

  const throttled = (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      timeout = setTimeout(() => {
        inThrottle = false;
      }, wait);
    }
  };

  throttled.cancel = () => {
    clearTimeout(timeout);
    inThrottle = false;
  };

  return throttled;
}

/**
 * Creates a function that memoizes the result of `func`.
 *
 * @param func The function to have its output memoized.
 * @param resolver The function to resolve the cache key.
 * @returns Returns the new memoized function.
 */
export function memoize<T extends AnyFunction>(
  func: T,
  resolver?: (...args: Parameters<T>) => unknown,
): T & { cache: Map<unknown, ReturnType<T>> } {
  const memoized = function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ): ReturnType<T> {
    const key = resolver ? resolver.apply(this, args) : args[0];
    const cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>;
    }
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
  memoized.cache = new Map<unknown, ReturnType<T>>();
  return memoized as T & { cache: Map<unknown, ReturnType<T>> };
}

/**
 * Throttles a function using `requestAnimationFrame`.
 * @param fn The function to throttle.
 * @returns A throttled version of the function.
 */
export const rafThrottle = <T extends AnyFunction>(
  fn: T,
): ((...args: Parameters<T>) => void) & { cancel: () => void } => {
  let rafId: number | null = null;

  const throttled = (...args: Parameters<T>) => {
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        fn(...args);
        rafId = null;
      });
    }
  };

  throttled.cancel = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  return throttled;
};

/**
 * Runs a function during the browser's idle periods.
 * @param callback The function to run.
 * @param options Options for the idle callback.
 */
export function runOnIdle(
  callback: () => void,
  options?: { timeout: number },
): { cancel: () => void } {
  if (typeof window === 'undefined') {
    // Server-side rendering fallback
    return {
      cancel: () => {}
    };
  }

  if ('requestIdleCallback' in window) {
    const id = window.requestIdleCallback(callback, options);
    return {
      cancel: () => window.cancelIdleCallback(id)
    };
  }

  // Fallback for browsers that don't support requestIdleCallback
  const timeoutId = setTimeout(callback, 0);
  return {
    cancel: () => clearTimeout(timeoutId)
  };
}

/**
 * Schedule a task to run after the current task.
 * @param fn Function to run
 * @returns A function to cancel the scheduled task
 */
export function scheduleTask(fn: () => void): () => void {
  if (typeof window === 'undefined') {
    // Server-side rendering fallback
    const immediateId = setImmediate(fn);
    return () => clearImmediate(immediateId);
  }

  if ('scheduler' in window && 'postTask' in (window as any).scheduler) {
    const task = (window as any).scheduler.postTask(fn);
    return () => task.cancel();
  } 
  
  if ('requestIdleCallback' in window) {
    const id = window.requestIdleCallback(fn);
    return () => window.cancelIdleCallback(id);
  }
  
  const id = setTimeout(fn, 0);
  return () => clearTimeout(id);
}

/**
 * Measures the execution time of a function
 * @param fn Function to measure
 * @param label Label for the measurement
 */
export function measurePerformance<T extends AnyFunction>(
  fn: T,
  label = 'Function',
): (...args: Parameters<T>) => ReturnType<T> {
  return function (this: unknown, ...args: Parameters<T>): ReturnType<T> {
    if (process.env.NODE_ENV === 'production') {
      return fn.apply(this, args);
    }

    const start = performance.now();
    const result = fn.apply(this, args);
    const end = performance.now();

    console.log(`${label} took ${(end - start).toFixed(2)}ms`);

    if (result && typeof result.then === 'function') {
      return result.finally(() => {
        console.log(`${label} (async) took ${(performance.now() - start).toFixed(2)}ms`);
      }) as ReturnType<T>;
    }
    return result;
  };
}
