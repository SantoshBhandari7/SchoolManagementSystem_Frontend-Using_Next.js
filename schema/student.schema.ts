import { Gender } from "@/types/enum.types";
import * as yup from "yup";

export const StudentSchema = yup.object({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  roll_no: yup.number().required("Roll number is required"),

  class: yup.string().required("Class is required"),

  address: yup.string().required("Address is required"),

  gender: yup
    .mixed<Gender>()
    .oneOf(Object.values(Gender), "Invalid gender")
    .required("Gender is required"),

  parentName: yup.string().required("Parent name is required"),

  parentPhone: yup
    .string()
    .matches(/^\d{10}$/, "Parent phone must be exactly 10 digits")
    .optional(),

  profile_image: yup
    .mixed<FileList>()
    .required("Profile image is required")
    .test(
      "fileExists",
      "Please select a profile image",
      (value) => value instanceof FileList && value.length > 0,
    ),
});
