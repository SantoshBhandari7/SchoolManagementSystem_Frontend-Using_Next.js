import * as yup from "yup";

export const subjectSchema = yup.object({
  subjectname: yup.string().required("subject name is required"),

  credithour: yup.number().required("credit hour is required"),

  teacher: yup.string().required("teacher is required"),

  program: yup.string().required("program is required"),

  class: yup.string().required("class is required"),
});
