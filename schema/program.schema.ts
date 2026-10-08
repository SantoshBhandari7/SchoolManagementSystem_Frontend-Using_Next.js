import * as yup from "yup";

export const programSchema = yup.object({
  name: yup.string().required("name is required"),

  description: yup
    .string()
    .required("description required")
    .min(10, "at least 10 character included")
    .max(500, "should not exceed than 500 characters"),

  duration: yup
    .number()
    .required("duration is required")
    .positive("should be positive number"),

  eligibility: yup
    .string()
    .required("eligibility is required")
    .min(5, " at least 5 character along")
    .max(200, "character should not more than 200 character"),
});

export type TProgram = yup.InferType<typeof programSchema>;
