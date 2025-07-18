import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // This ensures that the app works when served from subdirectories
    base: env.VITE_BASE_URL || "/",

    server: {
      host: "::",
      port: 8080,
    },

    // Vercel specific optimizations
    build: {
      outDir: "dist",
      sourcemap: mode === "development",
      minify: mode === "production" ? "esbuild" : false,
      cssMinify: mode === "production",
      chunkSizeWarningLimit: 1600,
    },

    plugins: [react()],

    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "./src"),
        },
      ],
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
  };
});
