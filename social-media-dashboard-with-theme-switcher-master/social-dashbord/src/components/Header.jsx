import React from "react";
import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSetTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-between items-center p-5 sm:gap-0 gap-5">
      <div className="flex-start">
        <div className="font-bold text-xl text-light-darkBlue dark:text-white">
          Social Media Dashboard
        </div>
        <p className="text-light-blue dark:text-dark-blue font-bold text-xs">
          Total Followers: 23,004
        </p>
      </div>
      <div className="flex-end flex items-center">
        <div className="text-light-grayBlue dark:text-white font-bold text-xs mr-1 sm:mr-3 w-9 sm:w-auto">
          Dark Mode
        </div>
        <label class="switch">
          <input type="checkbox" onClick={handleSetTheme} />
          <span class="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default Header;
