import React from "react";

import { MdOutlineDarkMode } from "react-icons/md";

import Button from "../button/Button";

export const Header = ({ handleTheme }) => {
  return (
    <header className="w-full bg-accent">
      <div className="flex flex-col items-center self-center justify-between max-w-screen-lg p-4 mx-auto text-center md:flex-row">
        <h1 className="text-2xl font-bold">Welcome to Contacts App</h1>
        <nav className="flex">
          <Button w="w-20" h="h-8">
            Sign In
          </Button>
          <Button w="w-8" h="h-8" handleTheme={handleTheme}>
            <MdOutlineDarkMode />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
