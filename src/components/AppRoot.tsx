import { StrictMode, Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "../App";
import { LoadingPage } from "./ui/loading-spinner";

// Initialize AOS with optimized defaults
const initAOS = () => {
  if (typeof window !== 'undefined') {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 100,
      delay: 100,
    });
  }
};

// App initialization component
const AppInitializer = () => {
  useEffect(() => {
    if (window.requestIdleCallback) {
      const id = window.requestIdleCallback(() => initAOS(), { timeout: 2000 });
      return () => {
        if (window.cancelIdleCallback) {
          window.cancelIdleCallback(id);
        }
      };
    } else {
      const idleCallbackTimeout = setTimeout(initAOS, 2000);
      return () => clearTimeout(idleCallbackTimeout);
    }
  }, []);

  return null;
};

// Root component with proper typing
export const Root = () => (
  <StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <AppInitializer />
      <App />
    </Suspense>
  </StrictMode>
);
