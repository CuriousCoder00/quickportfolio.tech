import { ToastProvider } from "@repo/ui/components/ui/toast";
import Router from "./lib/routes";

function App() {
  return (
    <div className="h-screen max-w-screen overflow-x-hidden flex flex-col items-center justify-center">
      <Router />
      <ToastProvider />
    </div>
  );
}

export default App;
