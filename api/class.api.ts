import { ICreateClass } from "@/types/class.types";
import api from ".";

export const getAllClasses = async () => {
  try {
    const response = await api.get("/classes");
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};

export const createClass = async (data: ICreateClass) => {
  try {
    const response = await api.post("/classes", data);
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};
