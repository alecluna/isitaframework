import React from "react";
import Toggle from "../DarkMode/Toggle";
import useDarkMode from "use-dark-mode";

const DarkModeToggle = (): any => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <button className="toggleButton" type="button" onClick={darkMode.disable}>
        ☀️
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button className="toggleButton" type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;
