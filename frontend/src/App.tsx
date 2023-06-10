import { useEffect, useState } from "react";
import "./App.scss";
import ThemeButton from "./components/ThemeButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [theme, setTheme] = useState<string>("default");
  const [customColor, setCustomColor] = useState('');
  useEffect(() => {
    const newTheme = localStorage.getItem("theme");
    if (newTheme) setTheme(newTheme);
    const color = localStorage.getItem('color');
    if(color) setCustomColor(color);
  }, []);

  return (
    <div className={`App ${theme}`} style={customColor?{background: customColor}:undefined} >
      <Router>
        <ThemeButton setTheme={setTheme} setCustomColor={setCustomColor} customColor={customColor}/>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
