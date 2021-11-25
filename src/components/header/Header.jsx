import React from "react";

import { MdOutlineDarkMode } from "react-icons/md";

import Button from "../button/Button";

export const Header = ({
  onThemeHandle,
  userName,
  onHomePage,
  setIsLoggedIn,
}) => {
  const welcomeHeading = userName
    ? "Welcome " + userName
    : "Welcome to Contacts App";

  const handleOnClick = () => {
    setIsLoggedIn();
  };

  const buttonComponent = !onHomePage ? (
    <Button
      conditionalClasses="hidden md:block w-20 h-8"
      handleOnClick={handleOnClick}
    >
      Sign In
    </Button>
  ) : (
    <>
      <Button conditionalClasses="w-28 h-8" handleOnClick={() => {}}>
        Add Contact
      </Button>
      <Button conditionalClasses="w-20 h-8" handleOnClick={handleOnClick}>
        Sign Out
      </Button>
    </>
  );
  return (
    <header className="w-full bg-accent">
      <div className="flex flex-col items-center self-center justify-between max-w-screen-lg p-4 mx-auto text-center md:flex-row">
        <h1 className="text-xl font-bold sm:text-2xl">{welcomeHeading}</h1>
        <nav className="flex">
          {buttonComponent}
          <Button conditionalClasses="w-8 h-8" handleOnClick={onThemeHandle}>
            <MdOutlineDarkMode />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
