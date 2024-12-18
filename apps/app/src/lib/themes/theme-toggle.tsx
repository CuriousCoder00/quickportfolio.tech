import { useTheme } from "./themes";
import { Button } from "@repo/ui/components/ui/button";
import { MoonStar, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center justify-center">
      {theme === "dark" ? (
        <Button variant={"secondary"} onClick={() => setTheme("light")}>
          <Sun />
        </Button>
      ) : (
        <Button variant={"secondary"} onClick={() => setTheme("dark")}>
          <MoonStar />
        </Button>
      )}
    </div>
  );
};

export default ThemeToggle;
