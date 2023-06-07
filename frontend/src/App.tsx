import { useEffect, useState } from "react";
import "./App.scss";
import ThemeButton from "./components/ThemeButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";

function App() {
  const [theme, setTheme] = useState<string>("default");
  useEffect(() => {
    const newTheme = localStorage.getItem("theme");
    if (newTheme) setTheme(newTheme);
  }, []);

  return (
    <div className={`App ${theme}`}>
      <Router>
        <ThemeButton setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
