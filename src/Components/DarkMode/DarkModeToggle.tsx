import React from "react";
import Toggle from "../DarkMode/Toggle";
import useDarkMode from "use-dark-mode";

const DarkModeToggle = (): any => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <button className="toggleButton" type="button" onClick={darkMode.disable}>
        <span role="img" aria-label="sun">
          ☀️
        </span>
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button className="toggleButton" type="button" onClick={darkMode.enable}>
        <span role="img" aria-label="moon">
          ☾
        </span>
      </button>
    </div>
  );
};

export default DarkModeToggle;
