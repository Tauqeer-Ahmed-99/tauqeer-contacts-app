import React, { useState } from "react";
import ContactsList from "../components/contact/ContactsList";
import Header from "../components/header/Header";
import InputForm from "../components/inputForm/InputForm";

const Home = ({ onThemeHandle, onHomePage, setIsLoggedIn, theme }) => {
  const [isFormModalOpen, toggleFormModal] = useState(false);

  return (
    <>
      <InputForm
        className="opacity-50"
        isFormModalOpen={isFormModalOpen}
        toggleFormModal={toggleFormModal}
      />
      <Header
        onThemeHandle={onThemeHandle}
        userName="Tauqeer Khan"
        onHomePage={onHomePage}
        setIsLoggedIn={setIsLoggedIn}
        theme={theme}
        toggleFormModal={toggleFormModal}
      />
      <ContactsList />
    </>
  );
};

export default Home;
