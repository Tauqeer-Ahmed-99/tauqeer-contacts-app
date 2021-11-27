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

  const history = useHistory();

  const settingIsLoggedIn = () => {
    setIsLoggedIn(isLoggedIn ? false : true);
  };

  const accessToken = useSelector((state) => state.auth.accessToken);
  console.log(accessToken);

  console.log(history);

  useEffect(() => {
    if (!accessToken) {
      history.push("/login");
    }
  }, [accessToken, history]);

  const handleTheme = (event) => {
    event.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div
      className="box-border h-screen p-0 m-0 bg-primary text-secondary"
      data-theme={theme}
    >
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
    </div>
  );
};

export default App;
