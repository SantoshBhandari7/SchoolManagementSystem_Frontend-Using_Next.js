import * as yup from "yup";

export const classSchema = yup.object({
  classname: yup.string().required("class name is required"),

  section: yup.string().required("section is required"),

  room_no: yup.number().required("room_no is required"),

  teacher: yup.string().required("teacher is required"),
});

export type TClass = yup.InferType<typeof classSchema>;
