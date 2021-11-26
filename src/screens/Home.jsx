import React from "react";
import ContactsList from "../components/contact/ContactsList";
import Header from "../components/header/Header";

const Home = ({ onThemeHandle, onHomePage, setIsLoggedIn, theme }) => {
  return (
    <>
      <Header
        onThemeHandle={onThemeHandle}
        userName="Tauqeer Khan"
        onHomePage={onHomePage}
        setIsLoggedIn={setIsLoggedIn}
        theme={theme}
      />
      <ContactsList />
    </>
  );
};

export default Home;
