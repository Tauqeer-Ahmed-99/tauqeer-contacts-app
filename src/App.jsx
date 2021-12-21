import { useEffect, useState } from "react";
import "./styles/app.css";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.getItem("theme") === "dark"
      ? setTheme("dark")
      : setTheme("light");
  }, []);

  const history = useHistory();

  const settingIsLoggedIn = () => {
    setIsLoggedIn(isLoggedIn ? false : true);
  };

  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (!accessToken) {
      history.push("/login");
    }
  }, [accessToken, history]);

  const handleTheme = (event) => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className="box-border grid items-center h-screen p-0 m-0 bg-primary text-secondary"
      data-theme={theme}
    >
      <Switch>
        <Route path="/login" exact>
          <Login
            onThemeHandle={handleTheme}
            onLoginPage={isLoggedIn}
            setIsLoggedIn={settingIsLoggedIn}
            theme={theme}
          />
        </Route>
        <Route path="/home">
          <Home
            onThemeHandle={handleTheme}
            onHomePage={isLoggedIn}
            setIsLoggedIn={settingIsLoggedIn}
            theme={theme}
          />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </div>
  );
};

export default App;
