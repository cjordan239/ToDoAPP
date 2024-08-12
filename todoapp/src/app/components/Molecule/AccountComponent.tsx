"use client";

import React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Formik, Form } from "formik";
import { AccountSchema } from "../Atom/Schema";
import FormField from "../Atom/FormField";

interface MyFormProps {
  username: string;
  password: string;
  email: string;
}

const AccountSignUp = () => {
  const initialValues: MyFormProps = { username: "", password: "", email: "" };

  const handleSignUp = () => {};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-screen-sm w-full bg-white rounded-lg shadow-md p-6">
        <div className=" text-rose-500 text-2xl py-4 rounded-t-lg">
          <div>
            <ListAltIcon className="mr-2" />
            <h1 className=" font-bold">Todo Daily</h1>
          </div>
        </div>
        <h2 className="font-brush">signUp</h2>
        <div className="flex justify-center items-center">
          <Formik
            initialValues={initialValues}
            validationSchema={AccountSchema}
            onSubmit={handleSignUp}
          >
            <Form>
              <FormField
                label="Username"
                name="username"
         
              />
              <FormField
                label="Password"
                name="password"
                type="password"
            
              />
              <FormField
                label="Email"
                name="email"
                type="email"
            
              />
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="#" className="text-blue-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSignUp;
