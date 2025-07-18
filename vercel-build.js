import { execSync } from "child_process";
import process from "process";

console.log("Running vercel-build.js...");

// Install dependencies using npm ci for more reliable builds
console.log("Installing dependencies using npm ci...");
try {
  // Clean npm cache and install
  execSync("npm cache clean --force", { stdio: "inherit" });
  execSync("npm ci --prefer-offline", { stdio: "inherit" });

  // Build the app
  console.log("Building the app...");
  execSync("npm run build", { stdio: "inherit" });

  console.log("Build completed successfully!");
} catch (error) {
  console.error("Build failed:", error);
  process.exit(1);
}
