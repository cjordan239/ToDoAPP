import React from "react";
import { Field } from "formik";

interface FormFieldProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, type = "text", placeholder }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-gray-700">
      {label}
    </label>
    <Field name={name} type={type} placeholder={placeholder} className="mt-1 block w-full border-gray-300 p-4 shadow-sm focus:outline-none focus:border-b-2 focus:border-blue-600 focus:animate-pulse" />
  </div>
);

export default FormField;
