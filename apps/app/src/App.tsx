import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      QuickPortfolio
      <Button>Get Started</Button>
      <Input type="text" placeholder="Enter your email" />
    </div>
  );
}

export default App;
