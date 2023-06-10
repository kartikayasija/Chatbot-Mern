import React, { useState, useContext } from "react";
import { SketchPicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeDropper } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton: React.FC = () => {
  const { setTheme, setCustomColor, customColor } = useContext(ThemeContext);
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
      <div style={{position:'relative'}}>
        <button
          onClick={() => setShowPicker((prevState) => !prevState)}
        >
          <FontAwesomeIcon icon={faEyeDropper} />
        </button>
        {showPicker && (
          <div style={{ position: "absolute", top: "40px",right:'0',zIndex:'1' }}>
            <SketchPicker color={customColor} onChangeComplete={handleChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeButton;
