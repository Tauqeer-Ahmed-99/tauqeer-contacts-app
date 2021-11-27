import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/header/Header";
import contactLogo from "../assets/contacts.png";
import Button from "../components/button/Button";

import { login } from "../actions/auth.action";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = ({ onThemeHandle, setIsLoggedIn, theme }) => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const loginHandler = () => {
    dispatch(login());
  };

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/home");
      setIsLoggedIn();
    }
  }, [accessToken, history, setIsLoggedIn]);

  return (
    <>
      <Header
        onThemeHandle={onThemeHandle}
        setIsLoggedIn={setIsLoggedIn}
        loginHandler={loginHandler}
        theme={theme}
      />
      <main className="flex flex-col items-center justify-between max-w-screen-lg pt-40 mx-auto mt-22 lg:flex-row">
        <img
          className="h-20 px-8 mx-8 md:h-52"
          src={contactLogo}
          alt="Contact Logo"
        />
        <div className="flex flex-col">
          <p className="p-2 mx-8 text-lg font-medium text-center md:text-2xl md:my-8 md:p-6 lg:text-xl lg:my-0">
            Welcome to Contact App!
            <br />
            Our contact app allows you to store your contacts.
          </p>
          <Button
            conditionalClasses="h-12 w-28 rounded-xl"
            handleOnClick={loginHandler}
          >
            Sign In
          </Button>
        </div>
      </main>
    </>
  );
};

export default Login;
