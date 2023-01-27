import React from "react";
import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  localStorage.setItem("theme", theme);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const handleSetTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-wrap justify-between items-center gap-5">
      <div>
        <div className="font-bold text-lg sm:text-xl text-light-darkBlue dark:text-white">
          Social Media Dashboard
        </div>
        <p className="text-light-blue dark:text-light-grayBlue font-bold text-xs">
          Total Followers: 23,004
        </p>
      </div>
      <span className="bg-line w-full h-px sm:hidden"></span>
      <div className="flex-end flex items-center justify-between w-full sm:justify-end sm:w-auto">
        <div className="text-light-blue dark:text-light-grayBlue font-bold text-xs mr-1 sm:mr-3 sm:w-auto">
          Dark Mode
        </div>
        <label className="switch">
          <input type="checkbox" onClick={handleSetTheme} />
          <span className="slider dark:before:bg-gray-800 dark:bg-gradient-to-tr dark:from-inputR dark:to-inputL dark:before:translate-x-input"></span>
        </label>
      </div>
    </div>
  );
}

export default Header;
