import { teacherSchema } from "@/schema/teacher.schema";
import { Image } from "./global.types";
import * as yup from "yup";
export interface ITeachers {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };

  profile_image: Image;
  address: string;
  experience: number;
  subject: string;
}

export interface ICreateTeacher {
  name: string;
  email: string;
  password: string;
  address: string;
  salary: number;
  subject: string;
  experience: number;
}

export type TTeacher = yup.InferType<typeof teacherSchema>;
