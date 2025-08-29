import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);
  return (
    <button
      onClick={toggleTheme}
      className="text-stone-800 dark:text-stone-100 text-4xl flex flex-row ease-in-out duration-300 hover:scale-130 hover:text-bright-accent dark:hover:text-dark-accent cursor-pointer"
    >
      {theme === "light" ? (
        <>
          <Moon />
        </>
      ) : (
        <>
          <Sun />
        </>
      )}
    </button>
  );
}

export default ThemeSwitcher;
