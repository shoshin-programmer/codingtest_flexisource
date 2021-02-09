import Head from "next/head";
import styles from "../styles/index.module.css";
import { useState } from "react";

import { Form, Formik, Field } from "formik";
import { string, object } from "yup";

interface MainForm {
  firstname: string;
  lastname: string;
  address: string;
}

const initialValues: MainForm = {
  firstname: "",
  lastname: "",
  address: "",
};

const Home = () => {
  const [notify, setNotify] = useState<any>();
  const handleNotification = (message: string) => {
    setNotify(message);
    setTimeout(() => {
      setNotify(null);
    }, 5000);
  };

  return (
    <div>
      <Head>
        <title>Coding Test ( FlexiSource )</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.container} ${styles.fullHeight} hero`}>
        <div
          className={`${styles.notification} u-position-absolute u-center u-text-center`}
        >
          {notify ? (
            <div className="toast toast--success ml-0">
              <small>{notify}</small>
            </div>
          ) : null}
        </div>

        <div className="hero-body">
          <div className="row u-center">
            <div className="col-md-6">
              <Formik
                validationSchema={object({
                  firstname: string()
                    .required("First name is required.")
                    .min(1)
                    .max(50, "Max characters should be 50."),
                  lastname: string()
                    .required("Last name is required.")
                    .min(1)
                    .max(50, "Max characters should be 50."),
                  address: string()
                    .required("Address is required.")
                    .min(10)
                    .max(100, "Max characters should be 100."),
                })}
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    actions.setSubmitting(false);
                    handleNotification("Changes has been saved.");
                  }, 3000);
                }}
              >
                {({ values, errors, touched, isSubmitting }) => (
                  <Form>
                    <div className="bg-light p-3">
                      <h1 className="font-alt u-text-center">
                        Edit your account.
                      </h1>
                      <div className="mb-0">
                        <label className="font-bold">Account Details</label>
                        <div className="section-body row">
                          <div className="col-12 pl-0">
                            <div className="input-control">
                              <Field
                                className={
                                  touched.firstname && errors.firstname
                                    ? "text-danger input-error"
                                    : null
                                }
                                name="firstname"
                                type="text"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <small className="text-danger">
                              {touched.firstname && errors.firstname
                                ? errors.firstname
                                : null}
                            </small>
                          </div>
                          <div className="col-12 pl-0">
                            <div className="input-control">
                              <Field
                                className={
                                  touched.lastname && errors.lastname
                                    ? "text-danger input-error"
                                    : null
                                }
                                name="lastname"
                                type="text"
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <small className="text-danger">
                              {touched.lastname && errors.lastname
                                ? errors.lastname
                                : null}
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="mb-0">
                        <label className="font-bold">
                          Delivery Information
                        </label>
                        <div className="col-12 pl-0">
                          <div className="input-control">
                            <Field
                              className={
                                touched.address && errors.address
                                  ? "text-danger input-error"
                                  : null
                              }
                              name="address"
                              type="text"
                              placeholder="Address"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <small className="text-danger">
                          {touched.address && errors.address
                            ? errors.address
                            : null}
                        </small>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={
                          isSubmitting
                            ? "animated loading w-100 btn-info mt-2"
                            : "w-100 btn-info mt-2"
                        }
                      >
                        Save
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
