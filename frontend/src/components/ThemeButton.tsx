type Prop = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeButton: React.FC<Prop> = ({ setTheme }) => {
  const handleTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };
  return (
    <div className="theme-container">
      <button onClick={() => handleTheme("default")} data-theme="default"></button>
      <button onClick={() => handleTheme("red")} data-theme="red"></button>
      <button onClick={() => handleTheme("blue")} data-theme="blue"></button>
    </div>
  );
};

export default ThemeButton;
