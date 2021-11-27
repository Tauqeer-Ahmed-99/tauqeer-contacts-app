import React from "react";
import { Form, Field } from "react-final-form";

const InputForm = ({ className, isFormModalOpen, toggleFormModal }) => {
  const defaultClass =
    "m-0 p-0 box-border w-screen h-screen bg-primary fixed top-0 left-0 z-8 fixed";
  const classes = className ? className + " " + defaultClass : defaultClass;
  const handleSubmit = (values) => {
    console.log(values);
  };
  const validate = () => {};
  return (
    <div className={!isFormModalOpen ? "hidden" : ""}>
      <div
        className={classes}
        onClick={() => {
          toggleFormModal(isFormModalOpen ? false : true);
        }}
      ></div>
      <Form
        onSubmit={handleSubmit}
        validate={validate}
        render={({ handleSubmit }) => {
          return (
            <section className="fixed z-50 w-11/12 p-6 mx-auto transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md h-11/12 md:max-w-4xl bg-accent text-secondary top-2/4 left-2/4">
              <h2 className="text-lg font-semibold capitalize text-secondary">
                Add Contact
              </h2>

              <form>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="text-secondary" htmlFor="name">
                      Name
                    </label>
                    <Field
                      name="name"
                      component="input"
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-secondary" htmlFor="phone">
                      Phone Number
                    </label>
                    <Field
                      name="phone"
                      component="input"
                      type="number"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-secondary" htmlFor="email">
                      Email Address
                    </label>
                    <Field
                      name="email"
                      component="input"
                      type="email"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-secondary" htmlFor="city">
                      City
                    </label>
                    <Field
                      name="city"
                      component="input"
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <label className="text-secondary" htmlFor="status">
                        Status
                      </label>
                    </div>
                    <div>
                      <label className="mr-2">
                        <Field
                          name="status"
                          type="radio"
                          value="Active"
                          component="input"
                        />
                        Active
                      </label>
                      <label>
                        <Field
                          name="status"
                          type="radio"
                          value="Inactive"
                          component="input"
                        />
                        Inactive
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-6 md:justify-end">
                  <button
                    className="px-6 py-2 mr-6 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    onClick={(event) => {
                      event.preventDefault();
                      toggleFormModal(isFormModalOpen ? false : true);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      toggleFormModal(isFormModalOpen ? false : true);
                      handleSubmit();
                    }}
                    className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            </section>
          );
        }}
      />
    </div>
  );
};

export default InputForm;
