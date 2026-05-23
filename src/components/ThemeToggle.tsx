import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggle}
      className={`relative inline-flex h-8 w-16 items-center rounded-full border border-border bg-secondary transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
    >
      {/* Sun icon (left) */}
      <Sun
        className={`absolute left-1.5 h-4 w-4 transition-opacity ${
          isDark ? "opacity-40 text-muted-foreground" : "opacity-100 text-accent"
        }`}
      />
      {/* Moon icon (right) */}
      <Moon
        className={`absolute right-1.5 h-4 w-4 transition-opacity ${
          isDark ? "opacity-100 text-primary" : "opacity-40 text-muted-foreground"
        }`}
      />
      {/* Thumb */}
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-background shadow-md ring-1 ring-border transition-transform duration-300 ease-out ${
          isDark ? "translate-x-9" : "translate-x-1"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
