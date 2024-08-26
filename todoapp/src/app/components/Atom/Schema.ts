import * as Yup from "yup";

export const AccountSignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string().min(2, "too short").required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

export const AccountSigninSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string().min(2, "too short").required("Required"),
});
