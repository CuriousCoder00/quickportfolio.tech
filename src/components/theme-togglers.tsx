import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MoonStar, SunMoon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center justify-center">
      {theme === "dark" ? (
        <Button
          className="px-3"
          variant={"outline"}
          onClick={() => setTheme("light")}
        >
          <SunMoon size={24} />
        </Button>
      ) : (
        <Button
          className="px-3"
          variant={"outline"}
          onClick={() => setTheme("dark")}
        >
          <MoonStar size={24} />
        </Button>
      )}
    </div>
  );
};

export default ThemeToggle;
