import { useState } from "react";
import "./styles/app.css";
import Login from "./screens/Login";
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const settingIsLoggedIn = () => {
    setIsLoggedIn(isLoggedIn ? false : true);
  };

  const handleTheme = (event) => {
    event.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div
      className="box-border h-screen p-0 m-0 bg-primary text-secondary"
      data-theme={theme}
    >
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path="/login">
            <Login
              onThemeHandle={handleTheme}
              onLoginPage={isLoggedIn}
              setIsLoggedIn={settingIsLoggedIn}
              theme={theme}
            />
            <Redirect to={isLoggedIn ? "/home" : "/login"}></Redirect>
          </Route>
          <Route path="/home">
            <Home
              onThemeHandle={handleTheme}
              onHomePage={isLoggedIn}
              setIsLoggedIn={settingIsLoggedIn}
              theme={theme}
            />
            <Redirect to={isLoggedIn ? "/home" : "/login"}></Redirect>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
