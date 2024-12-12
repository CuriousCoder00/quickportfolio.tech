import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "../../../packages/ui/src/globals.css";
import { ThemeProvider } from "./lib/themes/themes.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" attribute={"class"}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
