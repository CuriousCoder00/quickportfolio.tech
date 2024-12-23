import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@repo/ui/globals.css";
import "./styles.css";
import { ThemeProvider } from "./lib/themes/themes.tsx";
import { BrowserRouter } from "react-router";
import { Navbar } from "./components/header/header.tsx";
import { Toaster } from "@repo/ui/components/ui/toaster";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" attribute={"class"}>
        <Navbar />
        <App />
        <Toaster />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
