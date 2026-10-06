import { StudentSchema } from "@/schema/student.schema";
import { Gender } from "./enum.types";
import { Image } from "./global.types";
import * as yup from "yup";

export interface IStudent {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
  rollno: number;
  parentName: string;
  profile_image: Image;
}

export interface ICreateStudent {
  name: string;
  email: string;
  password: string;
  address: string;
  gender: Gender;
  roll_no: number;
  class: string;
  parentName: string;
  parentPhone?: string;
  profile_image: FileList;
}

export type TStudent = yup.InferType<typeof StudentSchema>;
