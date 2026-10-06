import { Image } from "./global.types";

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
