import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("slooze_theme") || "dark"
  );
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "light" ? "light" : ""
    );
    localStorage.setItem("slooze_theme", theme);
  }, [theme]);

  return (
    <button
      className="button"
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
    >
      {theme === "light" ? "Light" : "Dark"}
    </button>
  );
}
