import { Image } from "./global.types";

export interface ITeachers {
  _id: string;
  profile_image: Image;
  name: string;
  email: string;
  experience: string;
  subject: string;
}
