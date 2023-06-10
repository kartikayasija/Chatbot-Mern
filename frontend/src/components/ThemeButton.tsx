import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeDropper } from "@fortawesome/free-solid-svg-icons";

type Prop = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setCustomColor: React.Dispatch<React.SetStateAction<string>>;
  customColor: string;
};

const ThemeButton: React.FC<Prop> = ({
  setTheme,
  setCustomColor,
  customColor,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleTheme = (theme: string) => {
    localStorage.setItem("color", "");
    setCustomColor("");
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };
  const handleChange = (color: { hex: string }) => {
    console.log(color.hex);
    setCustomColor(color.hex);
    localStorage.setItem("color", color.hex);
  };

  return (
    <div className="theme-container">
      <button
        onClick={() => handleTheme("default")}
        data-theme="default"
      ></button>
      <button onClick={() => handleTheme("red")} data-theme="red"></button>
      <button onClick={() => handleTheme("blue")} data-theme="blue"></button>
      <button
        onClick={() => setShowPicker((prevState) => !prevState)}
        style={{ position: "relative",}}
      >
        <FontAwesomeIcon icon={faEyeDropper} />
      </button>
      {showPicker && (
        <div style={{ position: "absolute", top: "60px" }}>
          <SketchPicker color={customColor} onChangeComplete={handleChange} />
        </div>
      )}
    </div>
  );
};

export default ThemeButton;
