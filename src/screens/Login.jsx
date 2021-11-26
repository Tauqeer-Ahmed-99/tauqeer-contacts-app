import React from "react";
import Header from "../components/header/Header";
import contactLogo from "../assets/contacts.png";
import Button from "../components/button/Button";

const Login = ({ onThemeHandle, setIsLoggedIn, theme }) => {
  return (
    <>
      <Header
        onThemeHandle={onThemeHandle}
        setIsLoggedIn={setIsLoggedIn}
        theme={theme}
      />
      <main className="flex flex-col items-center justify-between max-w-screen-lg mx-auto my-14 lg:flex-row lg:text-">
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
            handleOnClick={setIsLoggedIn}
          >
            Sign In
          </Button>
        </div>
      </main>
    </>
  );
};

export default Login;
