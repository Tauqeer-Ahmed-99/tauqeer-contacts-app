import { useState } from "react";
import "./styles/app.css";
import Login from "./screens/Login";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const handleTheme = (event) => {
    event.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div
      className="box-border h-screen p-0 m-0 bg-primary text-secondary"
      data-theme={theme}
    >
      <Login handleTheme={handleTheme} />
    </div>
  );
};

export default App;
