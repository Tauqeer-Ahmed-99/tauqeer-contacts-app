import React from "react";
import Header from "../components/header/Header";
import contactLogo from "../assets/contacts.png";
import Button from "../components/button/Button";

const Login = ({ handleTheme }) => {
  return (
    <>
      <Header handleTheme={handleTheme} />
      <main className="flex flex-col items-center justify-between max-w-screen-lg mx-auto my-14 lg:flex-row lg:text-">
        <img
          className="h-20 px-8 mx-8 md:h-52"
          src={contactLogo}
          alt="Contact Logo"
        />
        <div className="flex flex-col">
          <p className="p-8 mx-8 text-lg font-medium md:text-2xl md:my-8 md:p-6 lg:text-xl lg:my-0">
            Welcome to Contact App!
            <br />
            Our contact app allows you to store your contacts.
          </p>
          <Button h="h-16" w="w-28">
            Sign In
          </Button>
        </div>
      </main>
    </>
  );
};

export default Login;
