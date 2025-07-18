import { createRoot } from "react-dom/client";
import { Root } from "@/components/AppRoot";
import "./index.css";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<Root />);
}
