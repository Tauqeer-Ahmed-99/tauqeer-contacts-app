import React, { useState } from "react";

import ContactsList from "../components/contact/ContactsList";
import Header from "../components/header/Header";
import InputForm from "../components/inputForm/InputForm";

const Home = ({ onThemeHandle, onHomePage, setIsLoggedIn, theme }) => {
  const [isFormModalOpen, toggleFormModal] = useState(false);
  const [isAddClicked, setAddClicked] = useState(false);
  const [contId, setContId] = useState("");

  const getContactIdFromContact = (contactId) => {
    setContId(contactId);
  };

  return (
    <>
      <InputForm
        className="opacity-50"
        isFormModalOpen={isFormModalOpen}
        toggleFormModal={toggleFormModal}
        contId={contId}
        isAddClicked={isAddClicked}
        setAddClicked={setAddClicked}
      />
      <Header
        onThemeHandle={onThemeHandle}
        userName="Tauqeer Khan"
        onHomePage={onHomePage}
        setIsLoggedIn={setIsLoggedIn}
        theme={theme}
        toggleFormModal={toggleFormModal}
        setAddClicked={setAddClicked}
      />
      <ContactsList
        toggleFormModal={toggleFormModal}
        getContactIdFromContact={getContactIdFromContact}
        isFormModalOpen={isFormModalOpen}
      />
    </>
  );
};

export default Home;
