import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("name is required"),
  email: yup
    .string()
    .email("invalid email format")
    .required("email is required"),
  subject: yup.string().required("subject is required"),
  message: yup
    .string()
    .required("message is required")
    .min(5, "minimum 5 sentence is required")
    .max(500, "maximum 500 character"),
});
