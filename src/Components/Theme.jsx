import React, { useEffect, useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={handleTheme}
    >
      <input
        type="checkbox"
        // defaultChecked="checked"
        className="toggle border-black bg-black text-white checked:border-white checked:bg-white checked:text-black"
      />
    </button>

    // <label className="swap swap-rotate">
    //   <input onClick={handleTheme} type="checkbox" />
    //   <div className="swap-on">DARKMODE</div>
    //   <div className="swap-off">LIGHTMODE</div>
    // </label>
  );
};

export default Theme;
