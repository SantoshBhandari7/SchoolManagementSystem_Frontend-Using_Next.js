import { Image } from "./global.types";

export interface IStudent {
  _id: string;
  name: string;
  email: string;
  roll_no: number;
  parentName: string;
  profile_image: Image;
}
