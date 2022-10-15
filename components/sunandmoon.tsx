import Script from "next/script";
import React, { useState } from "react";
import { getTheme, setTheme, Theme } from "./logic/theme";


export default function SunAndMoon() {
  const [mode, setMode] = useState(false);
  const toggleMode = () => {
    setTheme(mode ? Theme.Light : Theme.Dark);
    setMode(!mode)
  };
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
