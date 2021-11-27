import React from "react";
import Contact from "./Contact";

const ContactsList = () => {
  return (
    <div className="box-border h-auto py-8 mt-24 bg-primary">
      <div className="md:max-w-xl md:mx-auto lg:max-w-4xl">
        <div className="grid max-w-screen-lg grid-cols-1 gap-6 m-4 md:mx-auto md:grid-cols-2 lg:grid-cols-3">
          {[...new Array(20)].map(() => (
            <Contact
              name={"Tauqeer"}
              number={8879998633}
              email={"tauqueerrkhan@gmail.com"}
              imgUrl={""}
              city={"Kalyan"}
              status={"Active"}
              key={Math.random()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactsList;
