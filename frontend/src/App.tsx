import { useContext } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const {theme,customColor} = useContext(ThemeContext);
  
  return (
    <div className={`App ${theme}`} style={customColor?{background: customColor}:undefined} >
      <Router>
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
