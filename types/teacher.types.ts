import { Image } from "./global.types";

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
