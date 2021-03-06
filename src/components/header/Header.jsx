import React from "react";

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { BiLogOut, BiPlus } from "react-icons/bi";

import Button from "../button/Button";

import { logout } from "../../actions/auth.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const Header = ({
  onThemeHandle,
  onHomePage,
  theme,
  toggleFormModal,
  loginHandler,
  setIsLoggedIn,
  onLogInPage,
  setAddClicked,
}) => {
  const userName = useSelector((state) => state.auth.userName);
  const welcomeHeading = userName
    ? "Welcome " + userName
    : "Welcome to Contacts App";

  const handleOnClick = () => {
    loginHandler();
  };

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    setIsLoggedIn(onLogInPage ? false : true);
  };

  const buttonComponent =
    !onHomePage && !userName ? (
      <Button
        conditionalClasses="hidden md:block w-20 h-10 m-3"
        handleOnClick={handleOnClick}
      >
        Sign In
      </Button>
    ) : (
      <>
        <Button
          conditionalClasses="m-3 w-20 h-10 grid-cols-2"
          handleOnClick={() => {
            toggleFormModal(true);
            setAddClicked(true);
          }}
        >
          <span className="ml-4"> Add </span>
          <span>
            <BiPlus />
          </span>
        </Button>
        <Button
          conditionalClasses="m-3 w-10 h-10 "
          handleOnClick={logoutHandler}
        >
          <BiLogOut />
        </Button>
      </>
    );
  return (
    <header className="fixed top-0 left-0 z-10 w-full shadow-2xl bg-accent">
      <div className="flex flex-col items-center self-center justify-between max-w-screen-lg p-4 mx-auto text-center md:flex-row">
        <h1 className="text-xl font-bold sm:text-2xl">{welcomeHeading}</h1>
        <nav className="flex">
          {buttonComponent}
          <Button
            conditionalClasses="w-10 h-10 m-3"
            handleOnClick={onThemeHandle}
          >
            {theme !== "dark" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
