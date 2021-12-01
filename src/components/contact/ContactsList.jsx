import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactsList } from "../../actions/contactsList.action";
import Contact from "./Contact";

const ContactsList = ({ toggleFormModal }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);

  const { data } = useSelector((state) => state.contactsList);
  const [contacts, setContacts] = useState(data);

  useEffect(() => {
    dispatch(getContactsList(id));
  }, [dispatch, id]);

  useEffect(() => {
    setContacts(data);
  }, [data]);

  let contactsList;

  if (data === null) {
    contactsList = (
      <h1 className="grid max-w-4xl col-span-3 p-20 mt-8 text-center uppercase border border-secondary mx-half text-secondary rounded-3xl">
        No Contacts Added!
      </h1>
    );
  } else if (data) {
    contactsList = contacts?.map((contact) => {
      return (
        <Contact
          {...contact}
          key={contact.id}
          toggleFormModal={toggleFormModal}
        />
      );
    });
  }

  return (
    <div className="box-border h-auto py-8 mt-24 bg-primary">
      <div className="md:max-w-xl md:mx-auto lg:max-w-4xl">
        <div className="grid max-w-screen-lg grid-cols-1 gap-6 m-4 md:mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {contactsList}
        </div>
      </div>
    </div>
  );
};

export default ContactsList;
