import { TLogin, TSignUp } from "@/types/auth.types";
import api from ".";

export const login = async (data: TLogin) => {
  try {
    const response = await api.post("/auth/login", data);
    console.log("login response", response);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error?.response.data;
  }
};

export const signup = async (data: TSignUp) => {
  try {
    const response = await api.post("/auth/register", data);
    console.log("signup response", response);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error?.response.data;
  }
};
