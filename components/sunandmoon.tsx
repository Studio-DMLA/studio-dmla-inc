import Script from "next/script";
import React, { useEffect, useState } from "react";
import { getTheme, setTheme, Theme } from "./logic/theme";


export default function SunAndMoon() {
  const [mode, setMode] = useState(false);
  const toggleMode = () => {
    setTheme(mode ? Theme.Light : Theme.Dark);
    setMode(!mode)
  };
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !window.localStorage.getItem("theme")) {
      // dark mode
      setTheme(Theme.Dark);
      setMode(true)
    }
    if (window.localStorage.getItem("theme")) {
      const theme = window.localStorage.getItem("theme") as Theme;
      
      setTheme(theme);
      setMode(theme === Theme.Light ? false : true);
    }
  }, []);
  return (
    <div className={`mode ${mode ? "active" : ""}`}  onClick={toggleMode}>
      <Script
        onLoad={() => setMode(getTheme() === Theme.Light ? false : true)}
      />
      <div className={`mode_dark`}>
        <img src="./assets/icons/sun-solid.svg" alt="sun" />
      </div>
      <div className={`mode_light`}>
        <img src="./assets/icons/moon-solid.svg" alt="moon" />
      </div>
    </div>
  )
}
