import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-14 rounded-full bg-card/30 backdrop-blur-sm border border-border/50" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative w-14 h-14 rounded-full bg-card/30 backdrop-blur-sm border border-border/50 hover-glow flex items-center justify-center transition-all duration-300"
      aria-label="Toggle theme"
    >
      {/* Sun icon (visible in dark mode) */}
      <Sun 
        className={`absolute w-5 h-5 text-primary transition-all duration-500 ${
          theme === "dark" 
            ? "rotate-0 scale-100 opacity-100" 
            : "rotate-90 scale-0 opacity-0"
        }`} 
      />
      
      {/* Moon icon (visible in light mode) */}
      <Moon 
        className={`absolute w-5 h-5 text-primary transition-all duration-500 ${
          theme === "light" 
            ? "rotate-0 scale-100 opacity-100" 
            : "-rotate-90 scale-0 opacity-0"
        }`} 
      />
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/20 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default ThemeToggle;
