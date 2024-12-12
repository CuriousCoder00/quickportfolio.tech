import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "../../../packages/ui/src/globals.css";
import { ThemeProvider } from "./lib/themes/themes.tsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" attribute={"class"}>
        <Header />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
