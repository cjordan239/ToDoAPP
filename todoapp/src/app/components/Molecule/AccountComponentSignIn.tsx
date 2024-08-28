"use client";

import React, { useState } from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Formik, Form } from "formik";
import { AccountSigninSchema } from "../Atom/Schema";
import FormField from "../Atom/FormField";
import axios from "axios";

interface signInProps {
  username:string,
  password: string
}

const AccountSignIn = () => {
  const [login, setLogin] = useState(false);
  const initialValue = { username: "", password: "" };

  const handleSubmit = async (values: signInProps) => {
    try {
      const response = await axios.post("http://localhost:3001/users/signin", values);
      const user_id = response.data.id
      console.log("Response status:", response.status);
      console.log("Response data:", response.data);
  
      if (response.status === 200) {
        setLogin(true);
        localStorage.setItem("userid", user_id)
        console.log("Login succeeded:", values);
      } else {
        console.log("Login failed with status:", response.status);
        alert("Login failed: Incorrect username or password.");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("An error occurred during sign-in.");
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-screen-sm w-full rounded-lg shadow-md p-6 bg-white">
        <div className="text-rose-500 text-2xl py-4 rounded-t-lg">
          <div>
            <ListAltIcon className="mr-2" />
            <h1 className=" font-bold">Todo Daily</h1>
          </div>
          <h2 className="font-brush">signIn</h2>
        </div>
        <div className="flex justify-center items-center">
          <Formik
            initialValues={initialValue}
            validationSchema={AccountSigninSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormField label="Username" name="username" />
              <FormField label="Password" name="password" type="password" />
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
          <p className="text-sm">Forgot password ? </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSignIn;
