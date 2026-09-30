import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup
    .string()
    .email("invalid email format")
    .required("email is required"),
  password: yup.string().required("password is required"),
});

export const SignUpSchema = yup.object({
  name: yup.string().required("name is required"),
  email: yup
    .string()
    .email("invalid Email Format")
    .required("email is required"),

  password: yup
    .string()
    .required("password is required")
    .matches(/[A-Z]/, " at least one uppercase letter is required")
    .matches(/[a-z]/, "at least one lower case is required")
    .matches(/[0-9]/, "at least one number is required")
    .matches(
      /[@_$%!]/,
      "at least one special character is required eg:{@$_ etc}",
    ),

  confirmPassword: yup
    .string()
    .required("confirm password is required")
    .oneOf([yup.ref("password")], "password does not matched"),

  phone: yup
    .string()
    .optional()
    .test(
      "phone",
      "phone number should be exact 10",
      (value) => !value || /^[0-9]{10}$/.test(value),
    ),
});
