import React from "react";
import { Form, Field } from "react-final-form";

import validation from "./validation";

const InputForm = ({ className, isFormModalOpen, toggleFormModal }) => {
  const defaultClass =
    "m-0 p-0 box-border w-screen h-screen bg-primary fixed top-0 left-0 z-8 fixed";
  const classes = className ? className + " " + defaultClass : defaultClass;

  return (
    <Form
      onSubmit={(values, formAPI) => {
        console.log(values);
        formAPI.reset();
        formAPI.restart();
        if (values) {
          toggleFormModal(isFormModalOpen ? false : true);
        }
      }}
      validate={validation}
      initialValues={{
        name: "",
        phone: "",
        email: "",
        city: "",
        status: "inactive",
      }}
      render={({ handleSubmit, form }) => {
        return (
          <div className={!isFormModalOpen ? "hidden" : ""}>
            <div
              className={classes}
              onClick={() => {
                form.reset();
                form.restart();
                toggleFormModal(isFormModalOpen ? false : true);
              }}
            ></div>
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
                      type="text"
                      render={({ input, meta }) => (
                        <div>
                          <input
                            {...input}
                            type="text"
                            placeholder="Enter Name"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                          />
                          {meta.error && meta.touched && (
                            <span className="fixed font-bold text-red-700">
                              {meta.error}
                            </span>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  <div>
                    <label className="text-secondary" htmlFor="phone">
                      Phone Number
                    </label>
                    <Field
                      name="phone"
                      type="number"
                      render={({ input, meta }) => (
                        <div>
                          <input
                            {...input}
                            type="text"
                            placeholder="Enter Contact No."
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                          />
                          {meta.error && meta.touched && (
                            <span className="fixed font-bold text-red-700">
                              {meta.error}
                            </span>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  <div>
                    <label className="text-secondary" htmlFor="email">
                      Email Address
                    </label>
                    <Field
                      name="email"
                      type="email"
                      render={({ input, meta }) => (
                        <div>
                          <input
                            {...input}
                            type="email"
                            placeholder="Enter Email id"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                          />

                          {meta.error && meta.touched && (
                            <span className="fixed font-bold text-red-700">
                              {meta.error}
                            </span>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  <div>
                    <label className="text-secondary" htmlFor="city">
                      City
                    </label>
                    <Field
                      name="city"
                      type="text"
                      render={({ input, meta }) => (
                        <div>
                          <input
                            {...input}
                            type="text"
                            placeholder="Enter City"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                          />
                          {meta.error && meta.touched && (
                            <span className="fixed font-bold text-red-700">
                              {meta.error}
                            </span>
                          )}
                        </div>
                      )}
                    />
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <label className="text-secondary" htmlFor="status">
                        Status
                      </label>
                    </div>
                    <div className="flex">
                      <Field
                        name="status"
                        type="radio"
                        value="active"
                        render={({ input }) => (
                          <div className="flex">
                            <label htmlFor="status" className="mr-2">
                              Active
                            </label>
                            <input
                              type="radio"
                              value="active"
                              {...input}
                              className="mt-2 mr-4"
                            />
                          </div>
                        )}
                      />
                      <Field
                        name="status"
                        type="radio"
                        value="inactive"
                        render={({ input }) => (
                          <div className="flex">
                            <label htmlFor="status" className="mr-2">
                              Inactive
                            </label>

                            <input
                              type="radio"
                              value="inactive"
                              {...input}
                              className="mt-2 mr-4"
                            />
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-6 md:justify-end">
                  <button
                    className="px-6 py-2 mr-6 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    onClick={(event) => {
                      event.preventDefault();
                      form.reset();
                      form.restart();
                      toggleFormModal(isFormModalOpen ? false : true);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onSubmit={() => {}}
                    onClick={(event) => {
                      event.preventDefault();
                      handleSubmit();
                    }}
                    className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            </section>
          </div>
        );
      }}
    />
  );
};

export default InputForm;
