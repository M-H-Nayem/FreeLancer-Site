import React, { useEffect, useState } from "react";

const Theme = () => {
    const [theme, setTheme] = useState("dark");

   let hamdleTheme = () => {
 const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme); // 👈 this is key
  };

  // Apply initial theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button onClick={hamdleTheme}><input
      type="checkbox"
      defaultChecked="checked"
      className="toggle border-indigo-600 bg-indigo-500 checked:border-white checked:bg-white checked:text-orange-800"
    /></button>
  );
};

export default Theme;
