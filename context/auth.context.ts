"use client";
import { TLogin, TSignUp } from "@/types/auth.types";
import { Role } from "@/types/enum.types";
import { Image } from "@/types/global.types";
import { createContext } from "react";

export type TUser = {
  name: string;
  email: string;
  _id: string;
  profile_image: Image;
  role: Role;
};

type TAuthContext = {
  user: TUser | null;
  logout: () => void;
  login: (data: TLogin) => void;
  signup: (data: TSignUp) => void;
  isLoading: boolean;
};

const initialValues: TAuthContext = {
  user: null,
  isLoading: false,
  login: () => {},
  logout: () => {},
  signup: () => {},
};

const AuthContext = createContext<TAuthContext>(initialValues);
export default AuthContext;
