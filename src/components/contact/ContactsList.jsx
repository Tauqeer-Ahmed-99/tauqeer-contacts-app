import React from "react";
import Contact from "./Contact";

const ContactsList = () => {
  return (
    <div className="box-border h-auto py-0 my-0 bg-primary">
      <div className="md:max-w-xl md:mx-auto lg:max-w-4xl">
        <div className="grid max-w-screen-lg grid-cols-1 gap-6 m-4 md:mx-auto md:grid-cols-2 lg:grid-cols-3">
          {[...new Array(20)].map(() => (
            <Contact
              name={"Tauqeer"}
              number={8879998633}
              email={"tauqueerrkhan@gmail.com"}
              imgUrl={
                "https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              }
              city={"Kalyan"}
              status={"Active"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactsList;
