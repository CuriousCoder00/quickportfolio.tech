import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ArrowUpRight } from "lucide-react";

function App() {

  return (
    <div className="flex flex-col items-center max-w-screen h-dvh text-center pt-40">
      <div className="flex">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-32 p-6 transition-[filter] duration-300 will-change-[filter] hover:filter hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-32 p-6 transition-[filter] duration-300 will-change-[filter] hover:filter hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="sm:text-5xl text-3xl font-bold tracking-tight md:text-5xl relative">
        <span className="relative z-10 text-2xl">
          Vite + React + Percept UI
        </span>
        <span
          className="absolute inset-0 animate-pulse-glow bg-gradient-to-r from-blue-500/60 to-pink-500/60 blur-xl"
          aria-hidden="true"
        ></span>
      </h1>
      <h1 className="text-xl font-bold my-4">
        This project is bootstrapped with Tailwind CSS and Percept UI
      </h1>
      <div className="p-[2em]">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-slate-400">
        Click on the Vite and React logos to learn more
      </p>
      <div className="flex items-center justify-center gap-3">
        <a
          className="flex flex-col items-start justify-center h-24 p-3 border rounded-lg hover:bg-slate-900 mt-5 min-w-40 relative"
          href="https://perceptui.vercel.app"
          target="_blank"
        >
          Learn More About
          <span className="font-bold relative w-full text-start">
            PERCEPT UI{" "}
            <ArrowUpRight className="absolute top-1 right-1 text-xl" />
          </span>
          <span
            className="absolute inset-0 animate-pulse-glow bg-gradient-to-r from-blue-500/60 to-pink-500/60 blur-2xl"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="flex flex-col items-start justify-center h-24 p-3 border rounded-lg hover:bg-slate-900 mt-5 relative min-w-40"
          href="https://github.com/perceptui/ui"
          target="_blank"
        >
          Checkout Us On
          <span className="font-bold relative w-full text-start">
            GITHUB
            <ArrowUpRight className="absolute top-1 right-1 text-xl" />
          </span>
          <span
            className="absolute inset-0 animate-pulse-glow bg-gradient-to-r from-blue-500/60 to-pink-500/60 blur-2xl"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </div>
  );
}

export default App;
